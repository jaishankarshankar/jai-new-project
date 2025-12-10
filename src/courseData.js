const courses = [
  // 1) Electronics
  {
    id: "circuit-basics",
    title: "Circuit Creator Basics",
    category: "electronics",
    level: "Beginner",
    duration: "6 weeks",
    projectsShort: "8 projects",
    shortDescription: "Learn LEDs, buzzers, switches & breadboard basics.",
    images: {
      overview: "/assets/courses/circuit-basics-overview.png",
      layout: "/assets/courses/circuit-basics-layout.png",
      components: "/assets/courses/circuit-basics-components.png",
      diagram: "/assets/courses/circuit-basics-diagram.png"
    },
    imageBlocks: [
      {
        fileName: "circuit-basics-overview.png",
        title: "Basic Circuit Overview",
        caption:
          "A simple circuit containing a battery, resistor, LED and a switch, shown on a breadboard."
      },
      {
        fileName: "circuit-basics-breadboard.png",
        title: "Breadboard Layout",
        caption:
          "Top view infographic of a breadboard with power rails and connected components."
      }
    ],
    longContent: [
      {
        heading: "1. Why Learn Circuits?",
        body: `
Electronics is the invisible magic behind almost everything you use daily — mobile phones, TVs, fans, toys, doorbells, remote controls and even traffic lights.

In this course, we start from *zero knowledge*. You will learn:

• What electricity actually is in simple terms  
• How simple circuits work (with real-life examples)  
• How to safely use a breadboard, LEDs, resistors and buzzers  
• How to build your own mini electronic projects you can show at school

Think of this course as learning the “alphabet” of electronics. Once you know these basics, you can move forward to robotics, Arduino, IoT and more.
        `
      },
      {
        heading: "2. Electricity in Simple Words",
        body: `
### 2.1 Voltage, Current and Resistance as Water

To make electronics easy, imagine *water flowing in a pipe*:

• **Voltage (V)** → like water pressure that pushes the water  
• **Current (I)** → like the amount of water flowing  
• **Resistance (R)** → like narrow or wide sections in the pipe that control flow

A battery gives *voltage*, components like LED or buzzer need *current*, and a resistor controls that current so things don’t burn.

### 2.2 Simple ASCII Diagram of a Circuit

Here is a very simple circuit:

  [ Battery + ] ----[ Resistor ]----[ LED ]---- [ Battery - ]

• The battery pushes electrons  
• The resistor controls how much flows  
• The LED glows when current passes

If any part breaks (wire removed or switch open), the circuit is “open” and nothing works.
        `
      },
      {
        heading: "3. Important Components in This Course",
        body: `
We will use a small set of components again and again.  

**3.1 Battery**  
• Source of electrical energy  
• Common: 9V battery or AA batteries  
• Do not short the + and - directly — it may heat up.

**3.2 Resistor**  
• Slows down current so LEDs or buzzers are safe  
• Measured in ohms (Ω)  
• Example: 220Ω, 1kΩ  

**3.3 LED (Light Emitting Diode)**  
• Glows when current flows in correct direction  
• Has two legs:
  - Long leg: Anode (+)
  - Short leg: Cathode (-)

**3.4 Push Button / Switch**  
• Opens or closes circuit  
• Used to turn things ON or OFF manually

**3.5 Breadboard**  
A breadboard allows you to connect components *without soldering*.

Simple sketch:

  + + + + + + + +   (top power rail +)
  - - - - - - - -   (top power rail -)

  a1 a2 a3 a4 a5
  b1 b2 b3 b4 b5
  c1 c2 c3 c4 c5
  d1 d2 d3 d4 d5

• Vertically, holes in each column (a–d) are connected inside  
• Power rails run horizontally

Activity:  
Ask students to:
1. Identify power rails on actual breadboard  
2. Use a multimeter (if available) or continuity tester to see which holes are connected.
        `
      },
      {
        heading: "4. Building Your First LED Circuit",
        body: `
In this section, we build a simple LED circuit using a 9V battery, a 220Ω resistor and one LED.

**4.1 Steps to Build:**

1. Connect the battery snap wires to the breadboard power rails:  
   • Red → + rail  
   • Black → - rail  

2. Place the LED:  
   • Long leg (anode) into one row (for example, b5)  
   • Short leg (cathode) into another row (for example, b7)

3. Place the resistor:  
   • One leg in the same row as the LED anode  
   • Other leg in the + power rail

4. Connect LED cathode row to - rail using a jumper wire.

**4.2 Diagram (ASCII)**

   +9V rail:  [Battery +]----[Resistor]----(Row b5: LED long leg)  
   LED short leg (Row b7)----[Wire]----[- rail]

When you connect the battery, the LED should glow.  

Try reversing the LED — it will not glow because diodes conduct in one direction only.

**4.3 Student Questions**

• What happens if we remove the resistor?  
  → Too much current, LED may burn.  

• What if we swap LED legs?  
  → No current flows, LED off.

These questions help students understand polarity and the role of resistors.
        `
      },
      {
        heading: "5. Adding a Switch and Buzzer",
        body: `
Now we make the circuit interactive.

**5.1 Circuit with Switch**

We place a push button between the resistor and LED so that LED turns ON only when button is pressed.

ASCII layout:

  Battery + ---- Resistor ---- [ Push Button ] ---- LED ---- Battery -

When button is not pressed → circuit open → LED off  
When button pressed → closed → LED on

**5.2 Adding a Buzzer**

Extend the circuit:

  Battery + ---- Resistor ---- Switch ---- LED ---- Battery -  
                             \  
                              \---- Buzzer ----/

So when button is pressed:
• LED glows  
• Buzzer beeps  

Activity: Let students build:

1. **Doorbell model**: Switch near “door”, buzzer inside “house”.  
2. **Quiz buzzer**: Use two parallel switches for two teams, first buzzer indicates who pressed first.
        `
      },
      {
        heading: "6. Series and Parallel Connections",
        body: `
**6.1 Series Connection**

Components connected one after another.

Example:

  Battery + ---- LED1 ---- LED2 ---- Resistor ---- Battery -

• Same current flows through all  
• More components = more voltage needed

**6.2 Parallel Connection**

Components share the same start and end points.

Example:

        ┌---- LED1 ----┐
Battery +              ├---- Resistor ---- Battery -
        └---- LED2 ----┘

• Voltage across each branch is same  
• If one LED fails, the other can still work.

**6.3 Classroom Activity**

Ask students to:

1. Build series: two LEDs and see brightness  
2. Build parallel: two LEDs and compare  
3. Observe: series LEDs are dimmer on same battery.

This visually explains why series Christmas lights behave differently from parallel home lights.
        `
      },
      {
        heading: "7. Safety Tips for Students",
        body: `
Even though we work with small voltages, safety habits are important.

• Never short battery + and - directly  
• Don’t connect LEDs directly to 9V without resistor  
• Do not use damaged batteries (bulged or leaking)  
• Do not work with mains AC power (230V) in school projects  
• Keep liquids away from circuits  
• After class, remove battery from circuit to avoid discharge
        `
      },
      {
        heading: "8. Mini-Projects You Will Build",
        body: `
This course includes at least 8 mini-projects:

1. **Blinking LED using switch**  
2. **Doorbell with buzzer**  
3. **Table lamp with multiple LEDs**  
4. **Traffic light model (manual switching)**  
5. **Night indicator (using LDR in next course but idea introduced)**  
6. **Quiz buzzer for two teams**  
7. **Emergency torch (with switch)**  
8. **Model of a car headlight circuit**

For each project:
• We explain circuit diagram  
• Show breadboard connection  
• Explain real-world use  
• Ask students to modify at least one part (creative thinking).
        `
      },
      {
        heading: "9. Final Project – Mini Home Lighting System",
        body: `
In the final project, students combine everything:

**Goal:** Build a simple model of a "room" with two lights and one buzzer alarm.

Features:
• Switch 1: controls LED lamp 1  
• Switch 2: controls LED lamp 2  
• Switch 3: activates buzzer alarm

Students design:
• Layout of “room” on cardboard  
• Place LEDs as lights, buzzer as alarm  
• Draw doors/windows around  
• Explain their circuit using hand-drawn diagram

This gives them confidence to explain electronics in a science exhibition or class presentation.
        `
      },
      {
        heading: "10. Revision and Self-Assessment",
        body: `
At the end of the course, students review:

• What is a circuit?  
• Difference between series and parallel  
• Why we use resistors  
• How to read basic circuit diagrams  
• Breadboard usage and common mistakes  

Sample self-test questions:

1. Why does an LED need a resistor when connected to a 9V battery?  
2. What happens if you reverse LED polarity?  
3. Draw a simple doorbell circuit using battery, switch, buzzer and LED.  
4. Explain one real-life application of parallel circuits.

By the time this course is complete, the student is ready for more advanced electronics like **Sensor Science Lab** and **Arduino Mini Engineer**.
        `
      }
    ]
  },

  // 2) Sensor Science Lab
  {
    id: "sensor-science",
    title: "Sensor Science Lab",
    category: "electronics",
    level: "Intermediate",
    duration: "8 weeks",
    projectsShort: "10 projects",
    shortDescription: "Build smart systems with LDR, IR & Ultrasonic sensors.",
    images: {
      overview: "/assets/courses/sensor-science-overview.png",
      layout: "/assets/courses/sensor-science-layout.png",
      components: "/assets/courses/sensor-science-components.png",
      diagram: "/assets/courses/sensor-science-diagram.png"
    },
    imageBlocks: [
      {
        fileName: "sensor-science-overview.png",
        title: "Sensor Types Overview",
        caption: "Diagram showing sensors used in projects."
      },
      {
        fileName: "sensor-ultrasonic-layout.png",
        title: "Ultrasonic Sensor Layout",
        caption: "Pin layout and usage schematic."
      }
    ],
    longContent: [
      {
        heading: "1. Introduction to Sensors",
        body: `
Sensors are devices that detect changes in the environment and convert them into electrical signals that computers or microcontrollers can understand.

In this course, we explore three key sensors:
- **LDR (Light Dependent Resistor)**: Detects light levels
- **IR (Infrared) Sensor**: Detects obstacles or motion
- **Ultrasonic Sensor**: Measures distance

These sensors make devices "smart" — like automatic lights that turn on at night or robots that avoid walls.

Real-life examples:
- Street lights that turn on when dark
- Automatic doors at malls
- Parking sensors in cars
- Security alarms

By the end, you'll build projects like a light-controlled lamp, obstacle detector, and distance alarm.
        `
      },
      {
        heading: "2. How Sensors Work",
        body: `
Sensors work by changing their electrical properties based on the environment.

**2.1 LDR (Light Dependent Resistor)**
- In bright light: Low resistance (easy for current to flow)
- In dark: High resistance (hard for current to flow)

ASCII diagram:
  [Battery +] ---- [LDR] ---- [LED] ---- [Battery -]

When light hits LDR, resistance drops, LED glows brighter.

**2.2 IR Sensor**
- Emits infrared light and detects reflection
- If object is close, light reflects back, sensor detects it

ASCII diagram:
  IR LED (sends light) ----> Object ----> IR Receiver (detects reflection)

Used in TV remotes, motion detectors.

**2.3 Ultrasonic Sensor**
- Sends sound waves (like bat echolocation)
- Measures time for echo to return
- Calculates distance: Distance = (Speed of sound × Time) / 2

ASCII diagram:
  Sensor sends pulse ----> Object ----> Echo returns ----> Sensor calculates distance

Used in robots for navigation, parking sensors.
        `
      },
      {
        heading: "3. Building with LDR",
        body: `
**3.1 Simple LDR Circuit**

Connect LDR in series with resistor and LED.

When dark: LDR resistance high → Less current → LED dim
When light: LDR resistance low → More current → LED bright

**3.2 Project: Automatic Night Light**

Use LDR to control LED:
- In dark: LED on (like a street light)
- In light: LED off

Add a relay or transistor to control a real bulb.

Activity: Test in different light conditions. Adjust resistor for sensitivity.
        `
      },
      {
        heading: "4. Building with IR Sensor",
        body: `
**4.1 IR Sensor Module**

Most IR sensors have:
- IR LED (transmitter)
- IR Receiver (detector)
- Output pin: HIGH when obstacle detected, LOW when clear

**4.2 Project: Obstacle Detector**

Connect IR sensor to buzzer or LED.
When hand is near sensor, buzzer beeps.

ASCII circuit:
  IR Sensor ----> Microcontroller ----> Buzzer

Use in robots to avoid walls or as security alarm.
        `
      },
      {
        heading: "5. Building with Ultrasonic Sensor",
        body: `
**5.1 Ultrasonic Module (HC-SR04)**

Pins:
- VCC: +5V
- GND: Ground
- Trig: Send pulse
- Echo: Receive echo

**5.2 Project: Distance Alarm**

Measure distance and beep if object is too close.

Code logic:
- Send trigger pulse
- Measure echo time
- Calculate distance
- If distance < 10cm, beep buzzer

ASCII diagram:
  Ultrasonic Sensor ----> Microcontroller ----> Buzzer/LED

Applications: Parking assist, water level monitor.
        `
      },
      {
        heading: "6. Combining Sensors",
        body: `
**6.1 Multi-Sensor Project: Smart Lamp**

Use LDR + IR:
- If dark AND motion detected → Turn on light
- Like automatic porch light

**6.2 Robot Obstacle Avoidance**

Use IR + Ultrasonic:
- IR for close obstacles
- Ultrasonic for long-range

This teaches integration of multiple sensors.
        `
      },
      {
        heading: "7. Calibration and Troubleshooting",
        body: `
**7.1 Calibration**
- Adjust potentiometers on sensors for sensitivity
- Test in real conditions

**7.2 Common Issues**
- IR sensor false triggers from sunlight
- Ultrasonic inaccurate on soft surfaces
- LDR slow response

Solutions: Add filters, use averaging in code.
        `
      },
      {
        heading: "8. Safety and Best Practices",
        body: `
- Handle sensors carefully (static electricity can damage)
- Test circuits with low voltage first
- Document your projects with diagrams
        `
      },
      {
        heading: "9. Mini-Projects List",
        body: `
1. LDR-controlled LED
2. IR obstacle detector
3. Ultrasonic distance meter
4. Night security light
5. Parking sensor model
6. Multi-sensor alarm
7. Robot navigation prototype
8. Water level indicator
9. Automatic fan (temperature sensor if available)
10. Smart door bell
        `
      },
      {
        heading: "10. Final Project and Review",
        body: `
**Final Project:** Build a "Smart Home Model" with multiple sensors controlling lights, alarms, etc.

Review key concepts:
- Sensor principles
- Circuit connections
- Real-world applications
- Troubleshooting tips

This course prepares you for Arduino and IoT projects.
        `
      }
    ]
  },

  // 3) Arduino Mini Engineer
  {
    id: "arduino-mini-engineer",
    title: "Arduino Mini Engineer",
    category: "electronics",
    level: "Advanced",
    duration: "8 weeks",
    projectsShort: "12 projects",
    shortDescription: "Create automation projects using Arduino.",
    images: {
      overview: "/assets/courses/arduino-mini-engineer-overview.png",
      layout: "/assets/courses/arduino-mini-engineer-layout.png",
      components: "/assets/courses/arduino-mini-engineer-components.png",
      diagram: "/assets/courses/arduino-mini-engineer-diagram.png"
    },
    imageBlocks: [
      {
        fileName: "arduino-overview.png",
        title: "Arduino Board Overview",
        caption: "Pin layout and components of Arduino Uno."
      },
      {
        fileName: "arduino-project-layout.png",
        title: "Sample Project Layout",
        caption: "Wiring diagram for a simple Arduino project."
      }
    ],
    longContent: [
      {
        heading: "1. Introduction to Arduino",
        body: `
Arduino is an open-source microcontroller board that lets you build interactive projects.

Why Arduino?
- Easy to program (C/C++ like language)
- Lots of sensors and actuators available
- Community support

In this course, you'll learn:
- Arduino basics
- Digital/analog I/O
- Sensors and motors
- Automation projects

Real-life examples: Home automation, robots, weather stations.
        `
      },
      {
        heading: "2. Arduino Hardware",
        body: `
**2.1 Arduino Uno Board**
- Microcontroller: ATmega328P
- Digital pins: 0-13 (some PWM)
- Analog pins: A0-A5
- Power: 5V, 3.3V, GND

**2.2 Connecting Components**
- Use breadboard for prototyping
- Jumper wires for connections

ASCII diagram of Arduino pins:
  Digital: 0 1 2 3 4 5 6 7 8 9 10 11 12 13
  Analog: A0 A1 A2 A3 A4 A5
        `
      },
      {
        heading: "3. Arduino Programming Basics",
        body: `
**3.1 Arduino IDE**
- Download and install
- Write code in setup() and loop()

**3.2 Basic Code Structure**
void setup() {
  // Run once
  pinMode(13, OUTPUT);
}

void loop() {
  // Run forever
  digitalWrite(13, HIGH);
  delay(1000);
  digitalWrite(13, LOW);
  delay(1000);
}

This blinks LED on pin 13.
        `
      },
      {
        heading: "4. Digital I/O",
        body: `
**4.1 Digital Output**
- Control LEDs, buzzers, relays

Project: Blinking LED with button control.

**4.2 Digital Input**
- Read switches, sensors

Project: LED controlled by push button.
        `
      },
      {
        heading: "5. Analog I/O",
        body: `
**5.1 Analog Input**
- Read sensors like LDR, potentiometer

Project: LED brightness controlled by light level.

**5.2 Analog Output (PWM)**
- Control motor speed, LED brightness

Project: Fading LED.
        `
      },
      {
        heading: "6. Sensors and Actuators",
        body: `
**6.1 Sensors**
- Temperature, ultrasonic, IR

**6.2 Actuators**
- Motors, servos, relays

Project: Automatic door opener with ultrasonic sensor.
        `
      },
      {
        heading: "7. Advanced Projects",
        body: `
**7.1 Line Following Robot**
- IR sensors to follow line

**7.2 Weather Station**
- Sensors for temperature, humidity

**7.3 Home Automation**
- Control lights, fans remotely
        `
      },
      {
        heading: "8. Debugging and Best Practices",
        body: `
- Use Serial Monitor for debugging
- Comment code
- Test incrementally
        `
      },
      {
        heading: "9. Mini-Projects List",
        body: `
1. Blinking LED
2. Traffic light
3. Temperature monitor
4. Ultrasonic alarm
5. Servo motor control
6. IR remote control
7. LCD display
8. Motor speed control
9. Line follower
10. Obstacle avoiding robot
11. Smart irrigation
12. Wireless sensor network
        `
      },
      {
        heading: "10. Final Project and Review",
        body: `
**Final Project:** Build an automated system (e.g., smart greenhouse).

Review:
- Arduino programming
- Sensor integration
- Project building process

Ready for advanced electronics and IoT.
        `
      }
    ]
  },

  // 4) Python Starter Bootcamp
  {
    id: "python-starter",
    title: "Python Starter Bootcamp",
    category: "coding",
    level: "Beginner",
    duration: "6 weeks",
    projectsShort: "3 projects",
    shortDescription: "Learn Python basics & build mini apps.",
    images: {
      overview: "/assets/courses/python-starter-overview.png",
      layout: "/assets/courses/python-starter-layout.png",
      components: "/assets/courses/python-starter-components.png",
      diagram: "/assets/courses/python-starter-diagram.png"
    },
    imageBlocks: [
      {
        fileName: "python-basics.png",
        title: "Python Basics",
        caption: "Syntax and example code snippets."
      },
      {
        fileName: "python-mini-app.png",
        title: "Mini App Overview",
        caption: "Code overview of a simple Python app."
      }
    ],
    longContent: [
      {
        heading: "1. Introduction to Python",
        body: `
Python is a beginner-friendly programming language used for web development, data science, AI, and more.

Why Python?
- Easy to read and write
- Huge community
- Versatile

In this course, you'll learn basics and build mini apps.
        `
      },
      {
        heading: "2. Setting Up Python",
        body: `
Download Python from python.org.
Install IDE like VS Code or IDLE.
Write your first program: print("Hello, World!")
        `
      },
      {
        heading: "3. Variables and Data Types",
        body: `
Variables store data.
Types: int, float, string, bool.

Example:
name = "Alice"
age = 12
height = 150.5
is_student = True
        `
      },
      {
        heading: "4. Basic Operations",
        body: `
Arithmetic: +, -, *, /
String concatenation: "Hello" + " World"
Comparisons: ==, !=, <, >
        `
      },
      {
        heading: "5. Control Structures",
        body: `
**5.1 If-Else**
if age > 10:
    print("Teen")
else:
    print("Kid")

**5.2 Loops**
for i in range(5):
    print(i)

while condition:
    # code
        `
      },
      {
        heading: "6. Functions",
        body: `
Define reusable code.

def greet(name):
    return "Hello, " + name

print(greet("Alice"))
        `
      },
      {
        heading: "7. Lists and Loops",
        body: `
Lists store multiple items.
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)
        `
      },
      {
        heading: "8. Mini-Projects",
        body: `
1. Calculator app
2. Number guessing game
3. Simple quiz
        `
      },
      {
        heading: "9. Best Practices",
        body: `
- Use meaningful variable names
- Comment code
- Test small parts
        `
      },
      {
        heading: "10. Review and Next Steps",
        body: `
Review basics.
Next: Advanced Python, web dev, data science.
        `
      }
    ]
  },

  // 5) Web Design Launchpad
  {
    id: "web-design",
    title: "Web Design Launchpad",
    category: "coding",
    level: "Beginner",
    duration: "6 weeks",
    projectsShort: "3 projects",
    shortDescription: "Create websites using HTML & CSS.",
    images: {
      overview: "/assets/courses/web-design-overview.png",
      layout: "/assets/courses/web-design-layout.png",
      components: "/assets/courses/web-design-components.png",
      diagram: "/assets/courses/web-design-diagram.png"
    },
    imageBlocks: [
      {
        fileName: "html-css-overview.png",
        title: "HTML & CSS Overview",
        caption: "Basic structure of a web page."
      },
      {
        fileName: "web-design-layout.png",
        title: "Sample Layout",
        caption: "Example of a simple website layout."
      }
    ],
    longContent: [
      {
        heading: "1. Introduction to Web Design",
        body: `
Web design creates websites using HTML (structure), CSS (style), and sometimes JavaScript (interactivity).

You'll build your own websites.
        `
      },
      {
        heading: "2. HTML Basics",
        body: `
HTML uses tags to structure content.

Example:
<html>
<head><title>My Site</title></head>
<body>
<h1>Hello</h1>
<p>This is a paragraph.</p>
</body>
</html>
        `
      },
      {
        heading: "3. CSS Styling",
        body: `
CSS makes pages look good.

Example:
h1 {
    color: blue;
    font-size: 24px;
}

p {
    margin: 10px;
}
        `
      },
      {
        heading: "4. Layouts",
        body: `
Use divs and CSS for layouts.
Flexbox and Grid for modern designs.
        `
      },
      {
        heading: "5. Responsive Design",
        body: `
Make sites work on phones and desktops using media queries.
        `
      },
      {
        heading: "6. Adding Images and Links",
        body: `
<img src="image.jpg" alt="Description">
<a href="page.html">Link</a>
        `
      },
      {
        heading: "7. Forms",
        body: `
Collect user input with forms.
<input type="text" placeholder="Name">
        `
      },
      {
        heading: "8. Mini-Projects",
        body: `
1. Personal profile page
2. Simple blog
3. Contact form
        `
      },
      {
        heading: "9. Best Practices",
        body: `
- Semantic HTML
- Clean CSS
- Test in browsers
        `
      },
      {
        heading: "10. Review and Next Steps",
        body: `
Review HTML/CSS basics.
Next: JavaScript, frameworks like React.
        `
      }
    ]
  },

  // 6) MS Word Essentials
  {
    id: "ms-word",
    title: "MS Word Essentials",
    category: "computers",
    level: "Beginner",
    duration: "4 weeks",
    projectsShort: "2 projects",
    shortDescription: "Create documents, school projects & reports.",
    images: {
      overview: "/assets/courses/ms-word-overview.png",
      layout: "/assets/courses/ms-word-layout.png",
      components: "/assets/courses/ms-word-components.png",
      diagram: "/assets/courses/ms-word-diagram.png"
    },
    imageBlocks: [
      {
        fileName: "word-interface.png",
        title: "Word Interface",
        caption: "Overview of MS Word ribbon and tools."
      },
      {
        fileName: "word-formatting.png",
        title: "Formatting Options",
        caption: "Examples of text and page formatting."
      }
    ],
    longContent: [
      {
        heading: "1. Introduction to MS Word",
        body: `
MS Word creates professional documents.
Learn typing, formatting, and layouts.
        `
      },
      {
        heading: "2. Basic Typing and Editing",
        body: `
Open Word, type text, save files.
Cut, copy, paste.
        `
      },
      {
        heading: "3. Formatting Text",
        body: `
Bold, italic, underline.
Font size, color.
        `
      },
      {
        heading: "4. Paragraph and Page Formatting",
        body: `
Alignment, line spacing.
Margins, page size.
        `
      },
      {
        heading: "5. Styles and Themes",
        body: `
Apply consistent formatting.
        `
      },
      {
        heading: "6. Tables and Images",
        body: `
Insert tables, charts, images.
        `
      },
      {
        heading: "7. Headers, Footers, Page Numbers",
        body: `
Add professional elements.
        `
      },
      {
        heading: "8. Projects",
        body: `
1. School report
2. Resume/CV
        `
      },
      {
        heading: "9. Tips",
        body: `
Use templates, proofread.
        `
      },
      {
        heading: "10. Review",
        body: `
Master document creation.
        `
      }
    ]
  },

  // 7) MS Excel for Students
  {
    id: "ms-excel",
    title: "MS Excel for Students",
    category: "computers",
    level: "Intermediate",
    duration: "4 weeks",
    projectsShort: "2 projects",
    shortDescription: "Learn formulas, charts & data tables.",
    images: {
      overview: "/assets/courses/ms-excel-overview.png",
      layout: "/assets/courses/ms-excel-layout.png",
      components: "/assets/courses/ms-excel-components.png",
      diagram: "/assets/courses/ms-excel-diagram.png"
    },
    imageBlocks: [
      {
        fileName: "excel-interface.png",
        title: "Excel Interface",
        caption: "Overview of Excel workbook and formulas."
      },
      {
        fileName: "excel-chart.png",
        title: "Chart Example",
        caption: "Sample bar chart from data."
      }
    ],
    longContent: [
      {
        heading: "1. Introduction to Excel",
        body: `
Excel organizes data with spreadsheets.
Learn formulas, charts, analysis.
        `
      },
      {
        heading: "2. Basic Operations",
        body: `
Enter data, navigate sheets.
        `
      },
      {
        heading: "3. Formulas",
        body: `
=SUM(A1:A10)
=AVERAGE(B1:B5)
=IF(C1>50, "Pass", "Fail")
        `
      },
      {
        heading: "4. Charts and Graphs",
        body: `
Create bar, line, pie charts.
        `
      },
      {
        heading: "5. Data Sorting and Filtering",
        body: `
Organize large datasets.
        `
      },
      {
        heading: "6. Conditional Formatting",
        body: `
Highlight data based on rules.
        `
      },
      {
        heading: "7. Projects",
        body: `
1. Grade sheet with formulas
2. Budget tracker
        `
      },
      {
        heading: "8. Tips",
        body: `
Use absolute references ($A$1).
        `
      },
      {
        heading: "9. Review",
        body: `
Master data handling.
        `
      },
      {
        heading: "10. Next Steps",
        body: `
Advanced Excel, data analysis.
        `
      }
    ]
  },

  // 8) PowerPoint Presentation Skills
  {
    id: "powerpoint-skills",
    title: "PowerPoint Presentation Skills",
    category: "computers",
    level: "Beginner",
    duration: "4 weeks",
    projectsShort: "2 projects",
    shortDescription: "Create amazing slides with animations.",
    images: {
      overview: "/assets/courses/powerpoint-skills-overview.png",
      layout: "/assets/courses/powerpoint-skills-layout.png",
      components: "/assets/courses/powerpoint-skills-components.png",
      diagram: "/assets/courses/powerpoint-skills-diagram.png"
    },
    imageBlocks: [
      {
        fileName: "powerpoint-interface.png",
        title: "PowerPoint Interface",
        caption: "Slide view and animation tools."
      },
      {
        fileName: "powerpoint-slide.png",
        title: "Sample Slide",
        caption: "Example of a formatted slide."
      }
    ],
    longContent: [
      {
        heading: "1. Introduction to PowerPoint",
        body: `
PowerPoint creates presentations.
Learn design, animations, delivery.
        `
      },
      {
        heading: "2. Creating Slides",
        body: `
Add text, images, shapes.
        `
      },
      {
        heading: "3. Design Principles",
        body: `
Use themes, colors, fonts.
Keep it simple.
        `
      },
      {
        heading: "4. Animations and Transitions",
        body: `
Add entrance/exit effects.
        `
      },
      {
        heading: "5. Multimedia",
        body: `
Insert videos, audio.
        `
      },
      {
        heading: "6. Charts and Diagrams",
        body: `
Visualize data.
        `
      },
      {
        heading: "7. Presentation Tips",
        body: `
Practice, eye contact, voice.
        `
      },
      {
        "heading": "8. Projects",
        body: `
1. Class project presentation
2. Personal hobby slideshow
        `
      },
      {
        heading: "9. Best Practices",
        body: `
Less text, more visuals.
        `
      },
      {
        heading: "10. Review",
        body: `
Master presentation creation.
        `
      }
    ]
  },

  // 9) Speak Smart Daily English
  {
    id: "speak-smart-english",
    title: "Speak Smart Daily English",
    category: "english",
    level: "Beginner",
    duration: "6 weeks",
    projectsShort: "Speaking + Grammar",
    shortDescription: "Improve everyday communication skills.",
    images: {
      overview: "/assets/courses/speak-smart-english-overview.png",
      layout: "/assets/courses/speak-smart-english-layout.png",
      components: "/assets/courses/speak-smart-english-components.png",
      diagram: "/assets/courses/speak-smart-english-diagram.png"
    },
    imageBlocks: [
      {
        fileName: "english-conversation.png",
        title: "Conversation Practice",
        caption: "Group discussion activity."
      },
      {
        fileName: "english-grammar.png",
        title: "Grammar Basics",
        caption: "Key grammar rules overview."
      }
    ],
    longContent: [
      {
        heading: "1. Introduction to Daily English",
        body: `
Improve speaking, listening, grammar for daily use.
        `
      },
      {
        heading: "2. Basic Greetings and Introductions",
        body: `
Hello, how are you? My name is...
        `
      },
      {
        heading: "3. Everyday Vocabulary",
        body: `
Family, food, school, hobbies.
        `
      },
      {
        heading: "4. Simple Sentences",
        body: `
Subject-verb-object structure.
        `
      },
      {
        heading: "5. Questions and Answers",
        body: `
How, what, where questions.
        `
      },
      {
        heading: "6. Role Plays",
        body: `
Shopping, ordering food, asking directions.
        `
      },
      {
        heading: "7. Listening Practice",
        body: `
Listen to dialogues, repeat.
        `
      },
      {
        heading: "8. Grammar Basics",
        body: `
Present simple, pronouns, prepositions.
        `
      },
      {
        heading: "9. Activities",
        body: `
Pair work, group discussions.
        `
      },
      {
        heading: "10. Review and Practice",
        body: `
Daily speaking exercises.
        `
      }
    ]
  },

  // 10) Public Speaking Champion
  {
    id: "public-speaking",
    title: "Public Speaking Champion",
    category: "english",
    level: "Intermediate",
    duration: "4 weeks",
    projectsShort: "Stage practice",
    shortDescription: "Storytelling, debates & stage confidence.",
    images: {
      overview: "/assets/courses/public-speaking-overview.png",
      layout: "/assets/courses/public-speaking-layout.png",
      components: "/assets/courses/public-speaking-components.png",
      diagram: "/assets/courses/public-speaking-diagram.png"
    },
    imageBlocks: [
      {
        fileName: "public-speaking-stage.png",
        title: "Stage Setup",
        caption: "Presentation setup with audience."
      },
      {
        fileName: "public-speaking-body.png",
        title: "Body Language",
        caption: "Tips for effective body language."
      }
    ],
    longContent: [
      {
        heading: "1. Introduction to Public Speaking",
        body: `
Build confidence, structure speeches, engage audience.
        `
      },
      {
        heading: "2. Overcoming Fear",
        body: `
Breathing exercises, positive thinking.
        `
      },
      {
        heading: "3. Speech Structure",
        body: `
Introduction, body, conclusion.
        `
      },
      {
        heading: "4. Storytelling",
        body: `
Use stories to engage.
        `
      },
      {
        heading: "5. Body Language",
        body: `
Eye contact, gestures, posture.
        `
      },
      {
        heading: "6. Voice Control",
        body: `
Volume, pace, pauses.
        `
      },
      {
        heading: "7. Debates",
        body: `
Structure arguments, rebuttals.
        `
      },
      {
        heading: "8. Practice Sessions",
        body: `
Record and review.
        `
      },
      {
        heading: "9. Feedback",
        body: `
Get constructive feedback.
        `
      },
      {
        heading: "10. Final Presentation",
        body: `
Deliver a full speech.
        `
      }
    ]
  },

  // 11) Leadership & Teamwork Lab
  {
    id: "leadership-lab",
    title: "Leadership & Teamwork Lab",
    category: "softskills",
    level: "Beginner",
    duration: "4 weeks",
    projectsShort: "Group tasks",
    shortDescription: "Group tasks, team challenges & leadership games.",
    images: {
      overview: "/assets/courses/leadership-lab-overview.png",
      layout: "/assets/courses/leadership-lab-layout.png",
      components: "/assets/courses/leadership-lab-components.png",
      diagram: "/assets/courses/leadership-lab-diagram.png"
    },
    imageBlocks: [
      {
        fileName: "leadership-team.png",
        title: "Team Activity",
        caption: "Group working on a task."
      },
      {
        fileName: "leadership-games.png",
        title: "Leadership Games",
        caption: "Examples of team-building games."
      }
    ],
    longContent: [
      {
        heading: "1. Introduction to Leadership",
        body: `
Leadership inspires and guides teams.
        `
      },
      {
        heading: "2. Leadership Qualities",
        body: `
Communication, empathy, decision-making.
        `
      },
      {
        heading: "3. Teamwork Skills",
        body: `
Collaboration, trust, conflict resolution.
        `
      },
      {
        heading: "4. Group Activities",
        body: `
Icebreakers, problem-solving tasks.
        `
      },
      {
        heading: "5. Role Playing",
        body: `
Leader, follower scenarios.
        `
      },
      {
        heading: "6. Communication Exercises",
        body: `
Active listening, feedback.
        `
      },
      {
        heading: "7. Decision Making",
        body: `
Group decisions, consensus.
        `
      },
      {
        heading: "8. Reflection",
        body: `
What worked, what to improve.
        `
      },
      {
        heading: "9. Projects",
        body: `
Organize a small event.
        `
      },
      {
        heading: "10. Review",
        body: `
Apply skills in real life.
        `
      }
    ]
  },

  // 12) Smart Study & Time Management
  {
    id: "smart-study",
    title: "Smart Study & Time Management",
    category: "softskills",
    level: "Beginner",
    duration: "4 weeks",
    projectsShort: "Study planner",
    shortDescription: "Learn planning, focus & exam preparation.",
    images: {
      overview: "/assets/courses/smart-study-overview.png",
      layout: "/assets/courses/smart-study-layout.png",
      components: "/assets/courses/smart-study-components.png",
      diagram: "/assets/courses/smart-study-diagram.png"
    },
    imageBlocks: [
      {
        fileName: "study-planner.png",
        title: "Study Schedule",
        caption: "Example of a weekly study plan."
      },
      {
        fileName: "time-management.png",
        title: "Time Management Tips",
        caption: "Techniques for better focus."
      }
    ],
    longContent: [
      {
        heading: "1. Introduction to Time Management",
        body: `
Manage time effectively for studies.
        `
      },
      {
        heading: "2. Goal Setting",
        body: `
SMART goals: Specific, Measurable, Achievable, Relevant, Time-bound.
        `
      },
      {
        heading: "3. Prioritization",
        body: `
Eisenhower matrix: Urgent vs Important.
        `
      },
      {
        heading: "4. Study Techniques",
        body: `
Pomodoro, active recall, spaced repetition.
        `
      },
      {
        heading: "5. Creating a Schedule",
        body: `
Weekly planner, daily routines.
        `
      },
      {
        heading: "6. Focus and Concentration",
        body: `
Minimize distractions, mindfulness.
        `
      },
      {
        heading: "7. Exam Preparation",
        body: `
Revision plans, mock tests.
        `
      },
      {
        heading: "8. Overcoming Procrastination",
        body: `
Break tasks, rewards.
        `
      },
      {
        heading: "9. Tools and Apps",
        body: `
Calendars, timers, apps.
        `
      },
      {
        heading: "10. Review and Habit Building",
        body: `
Track progress, build habits.
        `
      }
    ]
  },

  // 13) College Survival Skills
  {
    id: "college-survival",
    title: "College Survival Skills",
    category: "college",
    level: "Beginner",
    duration: "6 weeks",
    projectsShort: "Life skills",
    shortDescription: "Communication, mindset & independence training.",
    images: {
      overview: "/assets/courses/college-survival-overview.png",
      layout: "/assets/courses/college-survival-layout.png",
      components: "/assets/courses/college-survival-components.png",
      diagram: "/assets/courses/college-survival-diagram.png"
    },
    imageBlocks: [
      {
        fileName: "college-campus.png",
        title: "Campus Life",
        caption: "Overview of college environment."
      },
      {
        fileName: "college-skills.png",
        title: "Survival Skills",
        caption: "Key skills for college success."
      }
    ],
    longContent: [
      {
        heading: "1. Introduction to College Life",
        body: `
Transition to independence, new responsibilities.
        `
      },
      {
        heading: "2. Time Management",
        body: `
Balance studies, activities, rest.
        `
      },
      {
        heading: "3. Study Skills",
        body: `
Note-taking, research, critical thinking.
        `
      },
      {
        heading: "4. Communication",
        body: `
With professors, peers, networking.
        `
      },
      {
        heading: "5. Financial Literacy",
        body: `
Budgeting, scholarships, part-time jobs.
        `
      },
      {
        heading: "6. Health and Wellness",
        body: `
Nutrition, exercise, mental health.
        `
      },
      {
        heading: "7. Social Skills",
        body: `
Making friends, cultural sensitivity.
        `
      },
      {
        heading: "8. Problem Solving",
        body: `
Handling challenges, seeking help.
        `
      },
      {
        heading: "9. Career Planning",
        body: `
Internships, resume building.
        `
      },
      {
        heading: "10. Review and Reflection",
        body: `
Personal growth, future goals.
        `
      }
    ]
  },

  // 14) Academic Success Toolkit
  {
    id: "academic-toolkit",
    title: "Academic Success Toolkit",
    category: "college",
    level: "Beginner",
    duration: "4 weeks",
    projectsShort: "Study toolkit",
    shortDescription: "Study techniques, note-taking & confidence building.",
    images: {
      overview: "/assets/courses/academic-toolkit-overview.png",
      layout: "/assets/courses/academic-toolkit-layout.png",
      components: "/assets/courses/academic-toolkit-components.png",
      diagram: "/assets/courses/academic-toolkit-diagram.png"
    },
    imageBlocks: [
      {
        fileName: "academic-notes.png",
        title: "Note-Taking Methods",
        caption: "Examples of effective note-taking."
      },
      {
        fileName: "academic-confidence.png",
        title: "Confidence Building",
        caption: "Tips for academic self-assurance."
      }
    ],
    longContent: [
      {
        heading: "1. Introduction to Academic Success",
        body: `
Tools and techniques for better learning.
        `
      },
      {
        heading: "2. Effective Study Techniques",
        body: `
Active learning, mnemonics, visualization.
        `
      },
      {
        heading: "3. Note-Taking Strategies",
        body: `
Cornell method, mind maps, summaries.
        `
      },
      {
        heading: "4. Memory and Retention",
        body: `
Spaced repetition, practice tests.
        `
      },
      {
        heading: "5. Reading Comprehension",
        body: `
Skimming, scanning, critical reading.
        `
      },
      {
        heading: "6. Writing Skills",
        body: `
Essay structure, research papers.
        `
      },
      {
        heading: "7. Test Preparation",
        body: `
Strategies for exams, reducing anxiety.
        `
      },
      {
        heading: "8. Building Confidence",
        body: `
Positive self-talk, overcoming imposter syndrome.
        `
      },
      {
        heading: "9. Seeking Help",
        body: `
Tutors, study groups, office hours.
        `
      },
      {
        heading: "10. Long-Term Habits",
        body: `
Consistency, self-reflection.
        `
      }
    ]
  }
];

export default courses;
