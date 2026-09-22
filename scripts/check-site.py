from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
from collections import Counter
root=Path('.')
class P(HTMLParser):
 def __init__(self):super().__init__();self.hrefs=[];self.images=[];self.titles=[];self.h1=0;self.canon=[];self.meta=[];self._title=False
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='a':self.hrefs.append(a.get('href',''))
  if tag=='img':self.images.append(a.get('src',''))
  if tag=='h1':self.h1+=1
  if tag=='title':self._title=True
  if tag=='link' and a.get('rel')=='canonical':self.canon.append(a.get('href',''))
  if tag=='meta' and a.get('name')=='description':self.meta.append(a.get('content',''))
 def handle_data(self,data):
  if self._title:self.titles.append(data)
 def handle_endtag(self,tag):
  if tag=='title':self._title=False
errors=[];titles=[];pages=list(root.glob('*.html'))
for file in pages:
 p=P();p.feed(file.read_text());titles+=[' '.join(p.titles)]
 if p.h1!=1:errors.append((file.name,'h1',p.h1))
 if len(p.canon)!=1 or len(p.meta)!=1:errors.append((file.name,'metadata',len(p.canon),len(p.meta)))
 for item in p.hrefs+p.images:
  if not item or item.startswith(('http:','https:','tel:','sms:','mailto:','#')):continue
  path=urlsplit(item).path
  if path in ('','.'):continue
  dest=(root/path).resolve()
  if not dest.exists():errors.append((file.name,'broken',item))
for title,n in Counter(titles).items():
 if n>1:errors.append(('duplicate title',title,n))
print('html pages',len(pages),'unique titles',len(set(titles)),'errors',len(errors))
for e in errors[:30]:print(e)
if errors:raise SystemExit(1)
