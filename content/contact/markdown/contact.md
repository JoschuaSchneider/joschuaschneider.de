##### Joschua Schneider

`Region Hanover, Germany`

Tweet me [@joschuadots](https://twitter.com/joschuadots)  
Follow new on [GitHub](https://github.com/JoschuaSchneider)

---

If you want us to **work together**, got any questions, need help or just want to say Hi,
feel free to contact me at <joschua-schneider@web.de>, in either **english** or **german**!

**I'm looking forward to hearing from you!**

---

```javascript
// aka: I'll try to get back to you as soon as possible
async function contact({ name, mail, body }) {
  const response = await readMail({ name, mail, body })
  return await respondToMail(mail, response, { delay: DELAY.AS_FAST_AS_POSSIBLE })
}
```
