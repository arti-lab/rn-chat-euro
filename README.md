
# Install modules
`npm install -g yarn`

`yarn install`

# Run android

You need to connect any android device to run this application on your pc. (allow adb debug on developer option)

`yarn run:android`

# Run iOS

`yarn run:iOS`

# Tips to overcome react-native-map error

insert the following line of code at the end of dependency list of react-native-map build.gradle

`implementation "com.android.support:appcompat-v7:${rootProject.ext.supportLibVersion}"`

