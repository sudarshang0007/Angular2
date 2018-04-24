echo 'Downloading Setup...'
call download.vbs
echo 'Setup Downloaded'
call node-v8.9.4-x64.msi
call env.vbs
xcopy .npmrc %userprofile% /R /C
