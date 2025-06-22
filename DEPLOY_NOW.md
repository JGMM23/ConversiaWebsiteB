# Deploy Your Website to AWS - Do This Now

Your website is built and ready to deploy. Follow these exact steps:

## Step 1: Create AWS S3 Bucket (5 minutes)

1. Go to **[AWS S3 Console](https://s3.console.aws.amazon.com/)**
2. Click **"Create bucket"**
3. Settings:
   - **Bucket name**: `conversia-ai-[your-initials]` (must be globally unique)
   - **Region**: us-east-1 (required)
   - **UNCHECK** "Block all public access"
   - **Check** the acknowledgment box
4. Click **"Create bucket"**

## Step 2: Configure Static Website Hosting (2 minutes)

1. Click on your new bucket name
2. Go to **"Properties"** tab
3. Scroll to **"Static website hosting"**
4. Click **"Edit"**
5. Select **"Enable"**
6. **Index document**: `index.html`
7. **Error document**: `index.html`
8. Click **"Save changes"**

## Step 3: Set Bucket Policy (2 minutes)

1. Go to **"Permissions"** tab
2. Click **"Bucket policy"** → **"Edit"**
3. Paste this policy (replace YOUR-BUCKET-NAME with your actual bucket name):

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
        }
    ]
}
```

4. Click **"Save changes"**

## Step 4: Upload Your Website Files (3 minutes)

1. Go to **"Objects"** tab
2. Click **"Upload"**
3. Click **"Add files"** or **"Add folder"**
4. Upload ALL files from the `deploy-ready` folder in your project
5. Click **"Upload"**

## Step 5: Test Your Website (1 minute)

1. Go back to **"Properties"** → **"Static website hosting"**
2. Click the **Bucket website endpoint** URL
3. Your website should load perfectly

---

## What to Tell Me Next:

1. **Your domain name** (from GoDaddy)
2. **Your S3 bucket name**
3. **The S3 website URL** (from step 5)
4. **"It works!"** when you see your site loading

Then I'll set up CloudFront CDN and connect your custom domain.

**Start now - this takes about 15 minutes total.**