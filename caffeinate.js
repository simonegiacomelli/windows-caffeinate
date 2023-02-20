var WshShell = WScript.CreateObject("WScript.Shell");
while (true) {
    WshShell.SendKeys ("{SCROLLLOCK}{SCROLLLOCK}");
    WScript.Sleep(60000);
}
