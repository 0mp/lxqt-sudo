<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="de">
<context>
    <name>PasswordDialog</name>
    <message>
        <location filename="../passworddialog.ui" line="6"/>
        <source>LXQt sudo</source>
        <translation>LXQt sudo</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="42"/>
        <source>Copy command to clipboard</source>
        <translation>Befehl in die Zwischenablage kopieren</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="45"/>
        <source>&amp;Copy</source>
        <translation>&amp;Kopieren</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="83"/>
        <source>The requested action needs administrative privileges.&lt;br&gt;Please enter your password.</source>
        <translation>Die angeforderte Aktion benötigt Administratorrechte.&lt;br&gt;Bitte geben Sie Ihr Passwort ein.</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="106"/>
        <source>LXQt sudo backend</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="109"/>
        <source>A program LXQt sudo calls in background to elevate priveledges.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="119"/>
        <source>Command:</source>
        <translation>Befehl:</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="126"/>
        <source>Password:</source>
        <translation>Passwort:</translation>
    </message>
    <message>
        <location filename="../passworddialog.ui" line="133"/>
        <source>Enter password</source>
        <translation>Passwort eingeben</translation>
    </message>
    <message>
        <location filename="../passworddialog.cpp" line="60"/>
        <source>Attempt #%1</source>
        <translation>Versuch #%1</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../sudo.cpp" line="67"/>
        <source>Usage: %1 option [command [arguments...]]

GUI frontend for %2/%3

Arguments:
  option:
    -h|--help      Print this help.
    -v|--version   Print version information.
    -s|--su        Use %3(1) as backend.
    -d|--sudo      Use %2(8) as backend.
  command          Command to run.
  arguments        Optional arguments for command.

</source>
        <translation>Aufruf: %1 Option [Befehl [Argumente...]]

Grafische Benutzeroberfläche für %2/%3

Argumente:
  Option:
    -h|--help      Diese Hilfe ausgeben.
    -v|--version   Versionsinformation ausgeben.
    -s|--su        %3(1) als Backend verwenden.
    -d|--sudo      %2(8) als Backend verwenden.
  Befehl           Auszuführender Befehl.
  Argumente        Argumente zum auszuführenden Befehl.

</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="84"/>
        <source>%1 version %2
</source>
        <translation>%1 Version %2
</translation>
    </message>
</context>
<context>
    <name>Sudo</name>
    <message>
        <location filename="../sudo.cpp" line="183"/>
        <source>%1: no command to run provided!</source>
        <translation>%1: kein auszuführender Befehl angegeben!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="190"/>
        <source>%1: no backend chosen!</source>
        <translation>%1: kein Backend gewählt!</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="207"/>
        <source>Syscall error, failed to fork: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="234"/>
        <source>unset</source>
        <extracomment>shouldn&apos;t be actually used but keep as short as possible in translations just in case.</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="270"/>
        <source>%1: Detected attempt to inject privileged command via LC_ALL env(%2). Exiting!
</source>
        <translation>%1: Versuch erkannt, einen privilegierten Befehl über LC_ALL env(%2) zu injizieren. Wird beendet!
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="314"/>
        <source>Syscall error, failed to bring pty to non-block mode: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="322"/>
        <source>Syscall error, failed to fdopen pty: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="291"/>
        <source>%1: Failed to exec &apos;%2&apos;: %3
</source>
        <translation>%1: Ausführen von &apos;%2&apos; fehlgeschlagen: %3
</translation>
    </message>
    <message>
        <location filename="../sudo.cpp" line="353"/>
        <source>Child &apos;%1&apos; process failed!
%2</source>
        <translation>Nachgeordneter Prozess &apos;%1&apos; ist fehlgeschlagen!
%2</translation>
    </message>
</context>
</TS>
