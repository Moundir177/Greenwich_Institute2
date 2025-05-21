# Replace these variables with your actual values
$AccountId = "5c617c0534a05bec0b5b2a0ecbe32064"
$ProjectName = "greenwich-hstc-new"
$CustomDomain = "greenwich-hstc.com"
$ApiToken = "YOUR_API_TOKEN"

# API endpoint
$Endpoint = "https://api.cloudflare.com/client/v4/accounts/$AccountId/pages/projects/$ProjectName/domains"

# Request headers
$Headers = @{
    "Authorization" = "Bearer $ApiToken"
    "Content-Type" = "application/json"
}

# Request body
$Body = @{
    "name" = $CustomDomain
} | ConvertTo-Json

# Make the API request
$Response = Invoke-RestMethod -Uri $Endpoint -Method POST -Headers $Headers -Body $Body -ContentType "application/json"

# Output the response
$Response | ConvertTo-Json -Depth 10 