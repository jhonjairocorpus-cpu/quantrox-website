$ffmpeg = "C:\Users\jhonc\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-8.1.1-full_build\bin\ffmpeg.exe"

$items = @(
  "01-desarrollamos-paginas-web",
  "02-creamos-base-de-datos",
  "03-caso-palacios-constructores",
  "04-caso-palacios-rental"
)

foreach ($name in $items) {
  $video = "social-videos\$name.mp4"
  $voice = "social-videos\voiceovers\$name.mp3"
  $out = "social-videos\$name-voz.mp4"

  & $ffmpeg -y `
    -stream_loop -1 `
    -i $video `
    -i $voice `
    -filter:a "loudnorm=I=-15:TP=-1.5:LRA=9" `
    -c:v libx264 `
    -preset medium `
    -crf 20 `
    -pix_fmt yuv420p `
    -c:a aac `
    -b:a 160k `
    -shortest `
    -movflags +faststart `
    $out
}
