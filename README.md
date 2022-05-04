# Falcon BMS ACData MissionType Selector
Falcon BMS uses so called "ACData" files like "F-16CM-50.dat" to define flight and systems model attributes.
One of these lines, called "misTypeCapability" defines which mission types the aircraft can and can't be fragged for.

## The Problem?
The full "misTypeCapability" line looks like this: `misTypeCapability 50 100 100 100 100 100 0 100 100 100 100 100 100 100 100 100 100 100 100 0 100 100 100 100 100 100 100 0 0 0 100 100 0 0 0 0 0 100 100 100 100 100 100 0 0 0 0 0 0 0 0`

Each of those 100/0 fields stands for a specific mission type, pretty hard to edit on the fly isn't it?

## The Solution
I developed this simple web-app GUI to easily edit this specific line. The latest version is always accessible ready-to-use [here](http://fabioschick.altervista.org/tools/ACData-MissionType-Selector/)

## Contributing
Feel free to make suggestions and contributions that make both code and design sleeker.
