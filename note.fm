httpService = new http();
httpService.setUrl("http://viewyt.xyz/api/taonote.php");
httpService.setMethod("POST");
httpService.addParam(type="header", name="Accept", value="text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9");
httpService.addParam(type="header", name="Accept-Language", value="en-US,en;q=0.9");
httpService.addParam(type="header", name="Cache-Control", value="max-age=0");
httpService.addParam(type="header", name="Connection", value="keep-alive");
httpService.addParam(type="header", name="Content-Type", value="application/x-www-form-urlencoded");
httpService.addParam(type="header", name="Origin", value="http://viewyt.xyz");
httpService.addParam(type="header", name="Referer", value="http://viewyt.xyz/index.php");
httpService.addParam(type="header", name="Upgrade-Insecure-Requests", value="1");
httpService.addParam(type="header", name="User-Agent", value="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36 Edg/103.0.1264.37");
httpService.addParam(type="body", value="text_or_id_page=demo&action=create");

result = httpService.send().getPrefix();
writeDump(result);
