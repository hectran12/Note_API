extern crate reqwest;
use reqwest::header;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut headers = header::HeaderMap::new();
    headers.insert("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9".parse().unwrap());
    headers.insert("Accept-Language", "en-US,en;q=0.9".parse().unwrap());
    headers.insert("Cache-Control", "max-age=0".parse().unwrap());
    headers.insert("Connection", "keep-alive".parse().unwrap());
    headers.insert("Content-Type", "application/x-www-form-urlencoded".parse().unwrap());
    headers.insert("Origin", "http://viewyt.xyz".parse().unwrap());
    headers.insert("Referer", "http://viewyt.xyz/index.php".parse().unwrap());
    headers.insert("Upgrade-Insecure-Requests", "1".parse().unwrap());
    headers.insert("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Safari/537.36 Edg/103.0.1264.37".parse().unwrap());

    let res = reqwest::Client::new()
        .post("http://viewyt.xyz/api/taonote.php")
        .headers(headers)
        .body("text_or_id_page=demo+t%E1%BA%A1o+note&action=create")
        .send()?
        .text()?;
    println!("{}", res);

    Ok(())
}
