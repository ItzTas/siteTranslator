from .translator import translateList, translateText
from bs4 import BeautifulSoup

def translateHTML(html_file, lang):
    soup = BeautifulSoup(html_file, "html.parser")
    soup.prettify()
    found_txt = []
    tags = {
        "title": [("title", soup.title.text, translateText(lang, soup.title.text))],
        "p": [],
        "td": [],
        "li": [],
    }
    
    p_tags = soup.find_all("p")
    i = 0
    for p in p_tags:
        if p.text in found_txt:
            continue
        if i == 8:
            break;
        found_txt.append(p.text)
        i += 1
        tags["p"].append((f"p({i})", p.text, translateText(lang, p.text)))
    if tags["p"]:
        tags["p"].append(i)
    td_tags = soup.find_all("td")
    i = 0
    for td in td_tags:
        if td.text in found_txt:
            continue
        if i == 8:
            break;
        found_txt.append(td.text)
        i += 1
        tags["td"].append((f"td({i})", td.text, translateText(lang, td.text)))
    if tags["td"]:
        tags["td"].append(i)
    li_tags = soup.find_all("li")
    i = 0
    for li in li_tags:
        if li.text in found_txt:
            continue
        if i == 8:
            break;
        found_txt.append(li.text)
        i += 1
        tags["li"].append((f"li({i})", li.text, translateText(lang, li.text)))
    if tags["li"]:
        tags["li"].append(i)
        
    return tags

def filteredTrsHTML(translated_dict):
    filtered = {}
    for key, value in translated_dict.items():
        if value:
          filtered[key] = value 
    return filtered

def getTranslatedTrs(html_file, lang):
    return filteredTrsHTML(translateHTML(html_file, lang))
            
