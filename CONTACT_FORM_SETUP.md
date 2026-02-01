# Contact Form Setup Instructions

## Overview
A responsive contact form dialog has been added to your website that opens when users click "Get Started" or "Get in touch" buttons.

## Features
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Form validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ Professional form fields

## Form Fields
1. **Full Name** (Required)
2. **Email Address** (Required)
3. **Phone Number** (Optional)
4. **What are you looking for?** (Required) - Dropdown with service options
5. **Project Budget** (Optional) - Budget range selector
6. **Tell us about your project** (Required) - Text area for project description
7. **Additional Information** (Optional) - Extra details

## Email Service Setup

### Option 1: Web3Forms (Recommended - FREE)
1. Visit https://web3forms.com/
2. Sign up for a free account
3. Get your Access Key
4. Open `components/contact-dialog.tsx`
5. Replace `YOUR_ACCESS_KEY_HERE` with your actual access key on line 26:
   ```typescript
   formData.append("access_key", "your-actual-key-here");
   ```
6. Configure email settings in Web3Forms dashboard
7. Done! Forms will be sent to your email

**Benefits:**
- ✅ Completely free
- ✅ No backend needed
- ✅ Unlimited submissions
- ✅ Email notifications
- ✅ Spam protection
- ✅ File uploads support

### Option 2: Formspree (Alternative - FREE tier available)
1. Visit https://formspree.io/
2. Sign up for free account
3. Create a new form
4. Get your form endpoint
5. Update `components/contact-dialog.tsx`:
   ```typescript
   const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
     method: "POST",
     body: formData,
     headers: {
       'Accept': 'application/json'
     }
   });
   ```

**Benefits:**
- ✅ 50 submissions/month (free)
- ✅ Email notifications
- ✅ Form dashboard
- ✅ Spam filtering

### Option 3: EmailJS (Alternative)
1. Visit https://www.emailjs.com/
2. Sign up for free account (200 emails/month)
3. Follow their setup guide
4. Update the contact dialog with EmailJS SDK

## Testing the Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Click "Get Started" or "Get in touch" button
3. Fill out the form
4. Submit and check your email

## Customization

### Change Form Fields
Edit `components/contact-dialog.tsx` to add/remove fields

### Change Styling
The form uses Tailwind CSS classes and matches your website's design (#4880ED primary color)

### Change Email Template
Configure in your chosen email service dashboard

## Troubleshooting

### Form not submitting
- Check browser console for errors
- Verify your access key is correct
- Check network tab for API responses

### Not receiving emails
- Check spam folder
- Verify email address in service dashboard
- Check service dashboard for submission logs

### Dialog not opening
- Check browser console for errors
- Verify all imports are correct
- Clear browser cache

## Files Modified/Created
- ✅ `components/contact-dialog.tsx` - Main contact form component
- ✅ `components/ui/dialog.tsx` - Dialog UI component
- ✅ `components/hero.tsx` - Added dialog trigger
- ✅ `components/navbar.tsx` - Added dialog trigger

## Support
If you need help, check:
- Web3Forms docs: https://docs.web3forms.com/
- Formspree docs: https://help.formspree.io/
- Your email service dashboard
