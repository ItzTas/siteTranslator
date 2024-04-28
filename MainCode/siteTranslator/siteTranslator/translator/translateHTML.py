from translator import translateList, translateText
from bs4 import BeautifulSoup
from html_test import test_html_file_str

def translateHTML(html_file, lang):
    soup = BeautifulSoup(html_file, "html.parser")
    soup.prettify()
    found_txt = []
    tags = {
        "title": [("title", soup.title.text, translateText(lang, soup.title.text))],
        "p": [],
        "div": [],
        "h1": [],
        "h2": [],
        "h3": [],
        "h4": [],
        "h5": [],
        "h6": [],
        "li": [],
        "td": [],
    }
    
    p_tags = soup.find_all("p")
    i = 0
    for p in p_tags:
        if p.text in found_txt:
            continue
        found_txt.append(p.text)
        i += 1
        tags["p"].append((f"p({i})", p.text, translateText(lang, p.text)))
    div_tags = soup.find_all("div")
    i = 0
    for div in div_tags:
        if div.text in found_txt:
            continue
        found_txt.append(div.text)
        i += 1
        tags["div"].append((f"div({i})", div.text, translateText(lang, div.text)))
    h1_tags = soup.find_all("h1")
    i = 0
    for h1 in h1_tags:
        if h1.text in found_txt:
            continue
        found_txt.append(h1.text)
        i += 1
        tags["h1"].append((f"h1({i})", h1.text, translateText(lang, h1.text)))
    h2_tags = soup.find_all("h2")
    i = 0
    for h2 in h2_tags:
        if h2.text in found_txt:
            continue
        found_txt.append(h2.text)
        i += 1
        tags["h2"].append((f"h2({i})", h2.text, translateText(lang, h2.text)))
    h3_tags = soup.find_all("h3")
    i = 0
    for h3 in h3_tags:
        if h3.text in found_txt:
            continue
        found_txt.append(h3.text)
        i += 1
        tags["h3"].append((f"h3({i})", h3.text, translateText(lang, h3.text)))
    h4_tags = soup.find_all("h4")
    i = 0
    for h4 in h4_tags:
        if h4.text in found_txt:
            continue
        found_txt.append(h4.text)
        i += 1
        tags["h4"].append((f"h4({i})", h4.text, translateText(lang, h4.text)))
    h5_tags = soup.find_all("h5")
    i = 0
    for h5 in h5_tags:
        if h5.text in found_txt:
            continue
        found_txt.append(h5.text)
        i += 1
        tags["h5"].append((f"h5({i})", h5.text, translateText(lang, h5.text)))
    h6_tags = soup.find_all("h6")
    i = 0
    for h6 in h6_tags:
        if h6.text in found_txt:
            continue
        found_txt.append(h6.text)
        i += 1
        tags["h6"].append((f"h6({i})", h6.text, translateText(lang, h6.text)))
    li_tags = soup.find_all("li")
    i = 0
    for li in li_tags:
        if li.text in found_txt:
            continue
        found_txt.append(li.text)
        i += 1
        tags["li"].append((f"li({i})", li.text, translateText(lang, li.text)))
    td_tags = soup.find_all("td")
    i = 0
    for td in td_tags:
        if td.text in found_txt:
            continue
        found_txt.append(td.text)
        i += 1
        tags["td"].append((f"td({i})", td.text, translateText(lang, td.text)))
        
    return tags

def filteredTrsHTML(translated_dict):
    filtered = {}
    for key, value in translated_dict.items():
        if value:
          filtered[key] = value 
    return filtered

def getTranslatedTrs(html_file, lang):
    return filteredTrsHTML(translateHTML(html_file, lang))
            

tags = getTranslatedTrs(test_html_file_str, "pt")
print(tags)