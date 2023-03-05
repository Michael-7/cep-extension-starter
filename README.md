# CEP Extension Starter

Starter template for creating CEP extensions with webpack

## Installation

Make sure you have NPM and Node.js installed, if you don't just google nodejs and download the installer.

Install the project in your Adobe CEP extensions folder `C:\Program Files (x86)\Common Files\Adobe\CEP\extensions\myfoldername` on windows
Now set the permissions for the folder to permit a normal user to edit not only admins. (so you dont have to open your editor and terminal in admin mode)

Then open a terminal inside the project and then run:
```shell
npm install
```

## Building

To test the UI and Javascript you can run `npm run serve`. and go to http://localhost:8080/

To test the Extendscript code you can build the project with `npm run build` and then go to after effects and open the extension up.
If you wish to debug put your `PlayerDebugMode` on `true` with the ZXP Installer or manually with regedit.
Then you can go to http://localhost:8088/ and see the console.

### production

When you are done with developing you can use `npm run build:prod` to create a production version. Then ship the dist and CSXS folder.
