import time
import sys

def type_writer(text, delay=0.1):
    for char in text:
        sys.stdout.write(char)
        sys.stdout.flush()
        time.sleep(delay)
    print()  

text = "Tôi cố mang tình vun đắp...!"
type_writer(text, 0.05) 
text = ""
type_writer(text, 0.019)
