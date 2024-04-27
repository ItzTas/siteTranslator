from translate import Translator

translator = Translator(to_lang="pt")

translation = translator.translate("Hello world")

print(translation)