from translate import Translator

def translateList (lang, listTr):
    translator = Translator(to_lang=lang)
    translated = []
    for text in listTr:
        strTrans = translator.translate(text)
        translated.append(strTrans)
    return translated

def translateText (lang, text):
    translator = Translator(to_lang=lang)
    return translator.translate(text)
