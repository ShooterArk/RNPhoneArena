# Phone Arena
A react native application to show phone models and their details such as price, description, color, ram and manufacturer.

<br />

### Prerequisites
1.	You need to install react-native-cli. Execute <b>npm install -g react-native-cli</b>.
2.	For testing, you need to install detox, <b>npm install -g detox-cli</b>

### How to run the app
1.	Clone the git repository git clone git@github.com:ShooterArk/RNPhoneArena.git.
2.	Run npm install to install node_modules.
3.	For android, to run the application, execute command <i>react-native run-android</i>
4.	For ios, you first need to execute <b>pod install</b> and then execute command <i>react-native run-ios</i> or you can

### Testing
For testing purpose, we are using detox. If you have installed detox-cli (as mentioned in prerequisites) then you need to follow the detox documentation (https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md) to complete the configuration.

Once detox configuration is complete, run the command to validate the tests.

	detox test --configuration android

<b>Ps. you need to mention configuration-name after --configuration. for this command I am using android, for ios you need to replace --configuration ios in the above command.</b>

### Demo app url
I have created an apk and uploaded it here. You can download and checkout the application.
https://drive.google.com/file/d/1P3P2Pz5BUizs9a2Beo7lQjOE_WDGddC8/view?usp=sharing

That's it, please contact me if you want to be a contributor. 
