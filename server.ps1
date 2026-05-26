# Servidor HTTP Simples em PowerShell para rodar o portfólio localmente
# Evita bloqueios de sockets que acontecem com Python em ambientes corporativos.

$port = 8082
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://127.0.0.1:$port/")

try {
    $listener.Start()
    Write-Output "Servidor rodando em http://127.0.0.1:$port/"
    Write-Output "Pressione Ctrl+C para encerrar o servidor."
    
    # Obtém o caminho do diretório onde o script está sendo executado de forma dinâmica
    $basePath = $PSScriptRoot
    if ([string]::IsNullOrEmpty($basePath)) {
        $basePath = Get-Location
    }
    
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $rawPath = $request.Url.LocalPath
        if ($rawPath -eq "/") {
            $rawPath = "/index.html"
        }
        
        # Corrige caminhos e evita path traversal
        $cleanPath = $rawPath.Replace("..", "").TrimStart('/')
        $filePath = [System.IO.Path]::Combine($basePath, $cleanPath)
        
        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            
            # Define o Content-Type correto para evitar erros no navegador
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = "application/octet-stream"
            
            switch ($ext) {
                ".html" { $contentType = "text/html; charset=utf-8" }
                ".css"  { $contentType = "text/css; charset=utf-8" }
                ".js"   { $contentType = "application/javascript; charset=utf-8" }
                ".json" { $contentType = "application/json; charset=utf-8" }
                ".png"  { $contentType = "image/png" }
                ".jpg"  { $contentType = "image/jpeg" }
                ".jpeg" { $contentType = "image/jpeg" }
                ".svg"  { $contentType = "image/svg+xml" }
                ".ico"  { $contentType = "image/x-icon" }
            }
            
            # Adiciona cabeçalhos CORS para permitir chamadas de arquivos JS
            $response.Headers.Add("Access-Control-Allow-Origin", "*")
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes("Arquivo nao encontrado")
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
        }
        $response.Close()
    }
} catch {
    Write-Error $_.Exception.Message
} finally {
    $listener.Stop()
}
