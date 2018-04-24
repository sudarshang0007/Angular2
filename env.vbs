Set objShell = CreateObject("WScript.Shell")
Set objEnv = objShell.Environment("USER")
 
'What we want to add
PathToAdd = "C:\Program Files\nodejs"
 
'Get the current value of Path
oldSystemPath = objEnv("PATH")
 
'Build the new Path
newSystemPath = oldSystemPath & ";" & PathToAdd
 
'Set the new Path
objEnv("PATH") = newSystemPath
 
wscript.echo "Complete"