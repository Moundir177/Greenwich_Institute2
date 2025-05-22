#!/bin/bash

# Replace these variables with your actual values
ACCOUNT_ID="5c617c0534a05bec0b5b2a0ecbe32064"
PROJECT_NAME="greenwich-hstc-website"
CUSTOM_DOMAIN="greenwich-hstc.com"
API_TOKEN="YOUR_API_TOKEN"

# API endpoint
ENDPOINT="https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/pages/projects/$PROJECT_NAME/domains"

# Make the API request
curl -X POST "$ENDPOINT" \
     -H "Authorization: Bearer $API_TOKEN" \
     -H "Content-Type: application/json" \
     -d "{\"name\":\"$CUSTOM_DOMAIN\"}" 