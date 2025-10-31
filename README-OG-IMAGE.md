# Open Graph Image Setup

To create the OG image for social media previews:

## Option 1: Screenshot (Quick)
1. Open `public/og-image.html` in your browser
2. Take a screenshot (1200x630px)
3. Save it as `public/og-image.png`

## Option 2: Using Online Tools
1. Open `public/og-image.html` in your browser
2. Use tools like:
   - [og-image.vercel.app](https://og-image.vercel.app/)
   - [screenshot.rocks](https://screenshot.rocks/)
   - [og-image-generator](https://www.opengraph.xyz/)

## Option 3: Using Puppeteer (Automated)
```bash
npm install --save-dev puppeteer
```

Then create a script to generate the image automatically.

## Update Your Domain
Make sure to update the `og:url` and image URLs in `public/index.html` to match your actual domain once deployed.

## Testing
After deployment, test your previews using:
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

