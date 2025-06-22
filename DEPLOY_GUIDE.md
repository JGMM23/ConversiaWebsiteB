# Deploy to AWS - Step by Step

Your website files are ready in the `ready-to-deploy` folder. Here's what to do:

## AWS S3 Setup (10 minutes)

### 1. Create S3 Bucket
- Go to [AWS S3 Console](https://s3.console.aws.amazon.com/)
- Click "Create bucket"
- Name: `conversia-ai-yourname` (globally unique)
- Region: us-east-1 
- UNCHECK "Block all public access"
- Create bucket

### 2. Enable Website Hosting
- Click your bucket → Properties tab
- Static website hosting → Edit → Enable
- Index document: `index.html`
- Error document: `index.html` 
- Save changes

### 3. Set Public Access Policy
- Permissions tab → Bucket policy → Edit
- Paste this (replace YOUR-BUCKET-NAME):

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
        }
    ]
}
```

### 4. Upload Files
- Objects tab → Upload
- Upload all files from `ready-to-deploy` folder
- Upload

### 5. Test
- Properties → Static website hosting → click the URL
- Your website should load

## Tell Me:
1. Your domain name
2. Your S3 bucket name  
3. The S3 website URL
4. "It works!" 

I'll then set up CloudFront and connect your domain.