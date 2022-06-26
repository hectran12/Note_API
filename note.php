<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'http://viewyt.xyz/api/taonote.php');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Accept' => 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Accept-Language' => 'en-US,en;q=0.9',
    'Cache-Control' => 'max-age=0',
    'Connection' => 'keep-alive',
    'Content-Type' => 'application/x-www-form-urlencoded',
    'Origin' => 'http://viewyt.xyz',
    'Referer' => 'http://viewyt.xyz/index.php',
    'Upgrade-Insecure-Requests' => '1',
    'User-Agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36 Edg/103.0.1264.37',
    'Accept-Encoding' => 'gzip',
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, 'text_or_id_page=demo+t%E1%BA%A1o+note&action=create');
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

$response = curl_exec($ch);

curl_close($ch);
