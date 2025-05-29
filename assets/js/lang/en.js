var MSG = {
  test: "TEST",
  // Header
  home: "Home",
  bipes: "BIPES",
  amado_maker: "Amado Maker",
  dblocks: "Dblocks",
  ebook: "Dblocks in Practice Ebook",

  // Main Content
  introduction_to_dblocks: "Introduction to Dblocks",
  in_this_section: "In This Section",
  sections: "Sections",
  overview: "Overview",
  what_is_dblocks: "What is Dblocks?",
  first_steps: "First Steps",
  exploring_platform: "Exploring the Platform",
  resources_support: "Resources and Support",

  // Subsections
  welcome_to_dblocks: "Welcome to Dblocks!",
  welcome_text:
    "Welcome to Dblocks! This guide is your gateway to exploring the world of embedded systems programming and the Internet of Things (IoT) in a simple and creative way. With a visual block-based interface (and the option to use code if you prefer), Dblocks makes technology accessible to everyone — from curious beginners to experienced professionals.",
  what_you_will_learn: "What will you learn?",
  intuitive_learning: "Intuitive Learning",
  intuitive_learning_text:
    "Dblocks uses visual blocks to simplify programming, allowing you to see your projects come to life with ease.",
  powerful_tools: "Powerful Tools",
  powerful_tools_text:
    "The AmadoBoard, a board based on the ESP32 chip, will be your main ally, featuring functionalities like Wi-Fi, Bluetooth, embedded sensors, and actuators.",
  practical_projects: "Practical Projects",
  practical_projects_text:
    "This guide is full of exercises and examples to help you apply what you’ve learned, from lighting up LEDs to creating more complex systems.",
  creative_exploration: "Creative Exploration",
  creative_exploration_text:
    "Beyond the basics, you’ll have the chance to experiment and create real projects that reflect modern-world applications.",

  what_is_dblocks_text1:
    "Dblocks is a platform that simplifies programming for embedded systems and IoT. With a visual block interface, you can create projects without worrying about complicated technical details. If you prefer more control, you can also program in MicroPython.",
  what_is_dblocks_text2:
    "The platform is specially designed to cater to everyone, from beginners who want to learn the first concepts of programming to professionals seeking to develop quick and effective solutions. With Dblocks, you can explore a wide range of possibilities, from activating LEDs to creating interactive dashboards for remote monitoring of sensors and devices.",
  what_is_dblocks_text3:
    "Dblocks was inspired by BIPES (Block-based Integrated Platform for Embedded Systems), an open-source platform widely recognized in Brazil and abroad. This inspiration allowed Dblocks to evolve, creating an optimized solution focused on education and IoT development. Unlike BIPES, Dblocks focuses exclusively on the AmadoBoard, an ESP32-based board. Developed by Amado Maker to simplify project creation, it integrates advanced features like Wi-Fi and Bluetooth connectivity with various embedded components.",
  what_is_dblocks_text4:
    "The AmadoBoard is not only technically powerful but also designed with learning in mind, making programming and the IoT universe accessible to students and enthusiasts.",

  basic_requirements: "Basic Requirements",
  requirements_list: [
    "AmadoBoard.",
    "Have the MicroPython library installed on the board.",
    "USB cable to connect the board to the computer.",
  ],
  quick_guide: "Quick Guide",
  quick_guide_list: [
    "Connect the board: Use the USB cable to connect your AmadoBoard to the computer.",
    "Open Dblocks: Access the platform through the browser.",
    "Create your first project: Drag the blocks into the workspace and click 'Run'.",
  ],

  workspace: "Workspace",
  workspace_text:
    "The workspace is the top-level component. This is where you do your programming work using the available blocks, with options to place, drag, delete, and structure them according to your needs.",
  toolbox: "Toolbox",
  toolbox_text:
    "The toolbox contains the blocks used for programming. These blocks can be dragged into the workspace. There are two main types of toolboxes: dropdown and category.",
  category_toolbox: "Category Toolbox",
  category_toolbox_text:
    "The category toolbox has several sets of blocks. Clicking on a category item opens a dropdown menu displaying the blocks in that category.",
  dropdown_toolbox: "Dropdown Toolbox",
  dropdown_toolbox_text:
    "The dropdown toolbox contains a set of blocks available for use, where you choose the blocks to be used in the workspace.",
  context_menu: "Context Menu",
  context_menu_text:
    "The context menu appears when you right-click. It displays a list of actions you can perform on that element, such as duplicating a block, adding comments, and other actions.",
  trash: "Trash",
  trash_text:
    "In the trash, you can drag and drop blocks to delete them. You can also click the trash to open a dropdown menu with deleted blocks so you can recover them.",
  fields: "Fields",
  fields_text:
    "A field is a visual element within a block. It can be editable (like a text input) or purely informative (like a label).",
  icons: "Icons",
  icons_text:
    "An icon is a visual element within a block. They are always located at the top corner of the block and usually create bubbles.",
  action_bar: "Action Bar",
  action_bar_text:
    "The action bar is a key part of interacting with the AmadoBoard. This is where you can connect the board, run programs, download your code for later use, and load it back whenever you want, along with other features.",

  need_help: "Need help?",
  resources_text: "Need help? Check out our additional resources:",
  ebook_link: "Dblocks in Practice Ebook",
  complete_amadoboard_guide: "Complete AmadoBoard Guide",
  requirements_list_1: "AmadoBoard.",
  requirements_list_2:
    "Have the <a href='https://joaodrj.github.io/Micropython_install/' target='_blank'>MicroPython</a> library installed on the board.",
  requirements_list_3: "USB cable to connect the board to the computer.",
  quick_guide_list_1:
    "<strong>Connect the board</strong>: Use the USB cable to connect your AmadoBoard to the computer.",
  quick_guide_list_2:
    "<strong>Open Dblocks</strong>: Access the <a href='https://dblocks.com.br/ui/index.html?lang=pt-br' target='_blank'>platform</a> through the browser.",
  quick_guide_list_3:
    "<strong>Create your first project</strong>: Drag the blocks into the workspace and click 'Run'.",
  introduction_to_dblocks: "Introduction to Dblocks",
  introduction_description:
    "In this section, we will explore the fundamental concepts of Dblocks and get to know its platform. Learn how block-based programming can simplify the development of interactive projects.",
  knowing_amado_board: "The Amado Board",
  amado_board_description:
    "In this section, we will learn about the Amado Board and its main features.",
  preparing_environment: "Preparing the Environment",
  environment_description:
    "Learn how to install the necessary drivers and set up the AmadoBoard with MicroPython to start developing your projects.",
  var_loop_print: "Variables, loops, and printing",
  var_loop_print_description: "In this section, we will learn how to work with variables, control structures, and print data to the screen.",
  logic_and_math: "Logic and Math",
  logic_and_math_description: "In this section, we will learn how to use logical and mathematical operators to create more complex and interesting programs.",

  digital_input_output: "Digital Input and Output",
  digital_io_description:
    "Discover how digital inputs and outputs work in Dblocks, learning to connect sensors and actuators to create interactive projects.",
  analog_input_output: "Analog Input and Output",
  analog_io_description:
    "Discover how analog inputs and outputs work in Dblocks, learning to read sensors and control actuators with precision to create advanced projects.",
  sensors: "Sensors",
  sensors_description:
    "Learn how to use sensors in Dblocks, collecting environmental data and integrating it into your projects to create interactive and smart solutions.",
  actuators: "Actuators",
  actuators_description:
    "Learn how actuators work in Dblocks, controlling them to create interactive and dynamic projects that respond to different stimuli.",
  music: "Music",
  music_description:
    "Learn to use the music functionality in Dblocks to compose melodies, adjust timing, and play sounds in your projects.",
  display: "Display",
  display_description:
    "Learn to use the display to show text, variables, and sensor readings.",
  resources_and_features: "Resources and Features",
  resources_description:
    "Discover the resources and features Dblocks offers to enhance your projects.",
  ab_knowing_amado_board: "Getting to Know the AmadoBoard",

  // Índice
  ab_introduction: "Introduction",
  ab_main_features: "Main Features",
  ab_system_power: "System Power",
  ab_analog_sensors: "Analog Sensors",
  ab_motor_driver: "Motor Driver",
  ab_servo_motors_connection: "Servo Motors Connection",
  ab_leds_and_buzzer: "LEDs and Buzzer",
  ab_io_connectors: "Input/Output Connectors",
  ab_extra_components: "Extra Components",

  // Introduction
  ab_introduction_text:
    "The AmadoBoard is a development board designed to simplify educational projects and technological experiments. Based on the ESP32, it was created to be simple, practical, and accessible, catering to both beginners and more experienced users. With various integrated components, it eliminates the need for additional accessories, making learning and development easier and more efficient.",

  // Main Features
  ab_feature_esp32: "ESP32 Architecture",
  ab_feature_wifi: "Wi-Fi Interface",
  ab_feature_bluetooth: "Bluetooth Interface",
  ab_feature_power_options:
    "Two power options: via microUSB port or 6 to 12VDC jack input",
  ab_feature_power_led: "Power indicator LED",
  ab_feature_usb_debug: "MicroUSB port for debugging and programming",
  ab_feature_motor_controller: "Controller for two integrated DC motors",
  ab_feature_io_pins: "13 IO pins available on headers",
  ab_feature_special_headers:
    "Headers formatted for specific pinouts (servomotors, OLED display, ultrasonic sensor, etc.)",
  ab_feature_spi: "SPI header",
  ab_feature_i2c: "Two I2C headers",
  ab_feature_leds: "3 integrated LEDs directly connected to IO ports",
  ab_feature_buzzer: "Integrated buzzer directly connected to an IO port",
  ab_feature_temp_sensor: "Integrated temperature sensor",
  ab_feature_ldr: "Integrated LDR",
  ab_feature_trimmer: "Integrated resistive trimmer",

  // System Power
  ab_power_intro: "The system can be powered in two ways:",
  ab_power_usb: "USB port (J4)",
  ab_power_jack: "Power jack (J2) - 6V to 12V",
  ab_power_regulators: "Includes voltage regulators for 5V and 3.3V.",

  // Analog Sensors
  ab_analog_sensors_text:
    "These devices are not connected to the microcontroller but to a connector. To use them, connect a jumper cable to a microcontroller port.",
  ab_sensor_temp: "Integrated temperature sensor (LM35)",
  ab_sensor_ldr: "Integrated LDR",
  ab_sensor_trimmer: "Integrated resistive trimmer",

  // Motor Driver
  ab_motor_driver_intro:
    "Includes a circuit (L293) to control two DC motors. Control pins:",
  ab_motor_a: "Motor A: D12, D13, D14",
  ab_motor_b: "Motor B: D25, D26, D27",
  ab_motor_driver_control:
    "Input pins determine the direction, and the EN pin controls speed via PWM.",

  // Servo Motors Connection
  ab_servo_motors_intro: "Two connectors for servo motors:",
  ab_servo_a: "Servo A: D15 (3.3V or 5V power)",
  ab_servo_b: "Servo B: D16 (3.3V or 5V power)",

  // LEDs and Buzzer
  ab_leds_and_buzzer_text:
    "- Red LED indicates 3.3V. - 3 controllable LEDs: - Red: D32 - Green: D33 - Blue: D2 - Buzzer: D4",

  // Input/Output Connectors
  ab_io_connectors_text:
    "- Input: D34, D35, D36, D39 (analog or digital). - Output: D5, D15, D16, D17, D18, D19, D21, D22, D23 (e.g., LEDs, buzzer). - I2C for OLED Display. - SPI bus.",

  // Extra Components
  ab_extra_potentiometer:
    "Potentiometer: adjusts resistance (e.g., light, volume).",
  ab_extra_resistors: "Resistors (100Ω, 330Ω, 1KΩ, 10kΩ): limit current.",
  ab_extra_power_supply: "9V 1A Bivolt power supply: for Arduino projects.",
  ab_extra_sonar: "HC-SR04 Sonar Distance Sensor Module: measures distances.",
  ab_extra_line_follower: "TCRT5000 Line Follower Module: detects lines.",
  ab_extra_buzzer: "Buzzer: emits sound.",
  ab_extra_ldr_module: "LDR Module: measures light intensity.",
  ab_extra_dht11:
    "DHT11 Temperature Sensor: measures temperature and humidity.",
  ab_extra_leds: "LEDs: indicate states.",
  ab_extra_servo: "Servo Motor: precise angle control.",
  ab_extra_dc_motor: "DC Motor: continuous motion.",
  ab_extra_oled: 'OLED Display (0.96", 128x64, I2C): compact screen.',
  ab_extra_components_text:
    "These components allow you to explore electronics and programming concepts, integrating theory and practice.",

  // Page "Preparing the environment"

preparing_environment: "Preparing the environment",
en_first_step: "First steps",
en_introduction_text: "First, we need to install a driver so the computer/laptop can recognize the board through the micro-USB cable connection. Download the CP210x driver using the link below:",
en_install_driver: "Install driver",
en_found_download: "Look for download or transfer and download the version indicated below:",
en_info_micropython: "To program the Amado board on Dblocks, we need to install MicroPython. We'll do this through the link below to simplify the process.",
en_install_micropython: "Install MicroPython",
en_info_micropython_page: "<span style='color:red;'>The installation page contains a tutorial video explaining the entire process</span>. The site is very simple and intuitive – just click connect, select the USB port as shown in the image below, and install MicroPython. This process can take 2 minutes or more.",
en_acessing_plataform_title: "Accessing the platform",
en_acessing_plataform_info1: "In the search bar, look for Dblocks and access the first site, or go directly to: dblocks.com.br",
en_acessing_plataform_info2: "On the homepage, click the 'start programming' button. A welcome message will appear with some information. If you’ve already installed MicroPython, you can close the message – your board is ready to use. If not, click on 'MicroPython Installer' and follow the process.",
en_useful_information: "Useful information",
en_inf_toolbox: "On the left side, there is the toolbox with the blocks available for use",
en_inf_workspace: "The central area is called the workspace, where we place our blocks.",
en_info_steel_bar: "In the top right, there are some buttons like the one to connect your board and the one to run the program.",
en_info_extra: "**Note: You can also download and reload the program to use it later or on another computer.",
en_first_project_title: "First project: Blink a LED infinitely",
en_first_project_step1: "First, click on Control, then on Loops, and select the 'repeat while' block. Position it as you like.",
en_first_project_step2: "Then click on Variables, Booleans, and select the 'True' block. Snap it into the previous block as shown in the image below:",
en_first_project_step3: "At this point, we have our loop, which is responsible for repeatedly executing our program – in this case, making the LED blink infinitely.",
en_first_project_step4: "The next step is to use the blocks responsible for turning the LED on and off. These can be found in the Input/Output Pins category. Look for the 'set output pin' block and place it inside the loop. We'll need to add this block twice – once to turn the LED on and once to turn it off. For the second block, select the 'false' option in 'to'.",
en_first_project_step5: "We’ll also use a pause to keep the LED on and off for a time interval. Look for the 'wait' block under Control, in the Timing category. Position the blocks as shown in the image below.",
en_first_project_step6: "Now that we’ve built the program, click the connect button in the top right corner, select the connected port (board) from your computer, and click connect.",
en_first_project_step7: "Once done, you'll see the icon indicating that the Amado board is connected to the platform.",
en_first_project_step8: "Now just click the button to run the program, and you’ll see the onboard LED blinking at 1-second intervals.",
en_first_project_step9: "Notes: You can run and pause the program as many times as you like by clicking the same button.",
en_first_project_step10: "Congratulations! You've just created your first program using the Amado board on the Dblocks platform.",

//Page inOutDigital
di_introduction_title: "Introduction",
di_intro1: 'In electronic and automation systems, <strong>digital inputs</strong> are signals that the device receives from the environment. These signals represent binary states — usually "on" or "off" (1 or 0). Common examples include buttons, presence sensors, and switches.',
di_intro2: "<strong>Digital outputs</strong>, on the other hand, are signals that the device sends to act on the environment, also in binary form. With them, it's possible to control LEDs, relays, motors, and other components that operate in two states (on/off).",
di_intro3: "These concepts are fundamental in automation projects, where sensors report the state of the environment and actuators respond according to the defined logic.",
di_intro4: "Next, we'll see how to use digital inputs and outputs in practice in a simple and intuitive way.",

//Digital input
di_in_title: "Digital Input",
di_in1: "A practical example of a digital input can be created using the <strong>dBlocks</strong> platform and the <strong>Amado Board</strong>.",
di_in2: "In the image below, we have a program that continuously reads a digital pin from the board:",
di_in3: "What does this program do?",
di_in4: "<strong>While the program is running</strong>, it repeatedly executes the instructions inside the <code>repeat while true</code> block.",
di_in5: "It <strong>reads the logic state</strong> (0 or 1) of the <strong>D16 / SERVO B</strong> pin using the <code>read digital input</code> command.",
di_in6: "The value read is <strong>stored in the <code>x</code> variable</strong>.",
di_in7: "Then, the program <strong>prints to the console</strong> a message like: <code>Value of x: 1</code> or <code>Value of x: 0</code>.",
di_in8: "The program then <strong>waits 500 milliseconds</strong> before repeating the reading.",
di_in9: "Hardware setup",
di_in10: "To test this code in practice, you can use a <strong>jumper</strong> connected to the <code>D16</code> pin of the Amado Board. Toggle this jumper between <strong>GND</strong> (0V) and <strong>3.3V</strong>, thus simulating a digital signal:",
di_in11: "When the jumper is connected to <strong>GND</strong>, the value read will be <code>0</code>.",
di_in12: "When the jumper is connected to <strong>3.3V</strong>, the value read will be <code>1</code>.",
di_in13: "This clearly demonstrates the operation of a digital input, showing how the board interprets two distinct states and how this can be visualized on the console.",
di_in14: "Visualizing the results in the console",
di_in15: "The dBlocks platform has a console that allows you to monitor, in real time, the results of the readings performed by the blocks. In the example below, we see the value of the <code>x</code> variable being printed continuously:",
di_in16: "As the jumper is switched between GND and 3.3V, the value of <code>x</code> changes between <strong>0</strong> and <strong>1</strong>, and this is immediately reflected in the console. This is an efficient and clear way to test and debug your project's logic.",

//Digital output
di_out_title: "Digital Output",
di_out1: 'Digital outputs allow the board to control external devices by sending "on" or "off" type signals. A classic example is controlling an LED.',
di_out2: "Below we have an example where the blue LED connected to pin <code>D2</code> of the <strong>Amado Board</strong> blinks continuously:",
di_out3: "What does this program do?",
di_out4: "The <code>repeat while true</code> block ensures the program keeps running in a loop.",
di_out5: "The <code>D2 / BLUE LED</code> pin is configured as a digital output.",
di_out6: "First, the LED is turned on with the <code>set output pin to true</code> command.",
di_out7: "The program then waits for <strong>500 milliseconds</strong>.",
di_out8: "After that, the LED is turned off with the <code>set output pin to false</code> command.",
di_out9: "Again, the program waits for <strong>500 milliseconds</strong>.",
di_out10: "This makes the LED blink continuously with a half-second interval between turning on and off. This type of control is very useful in signaling systems, visual notifications, or simple pin functionality tests.",


// Page inOutAnalog
an_introduction_title: "Introduction",
an_intro1: "In electronic projects, <strong>analog inputs and outputs</strong> allow working with signals that vary continuously. Unlike digital signals, which have only two states (0 or 1), analog signals can represent a range of values, making them ideal for measuring things like light, temperature, or controlling LED intensity.",
an_intro2: "In this example, we’ll use the <strong>LDR light sensor</strong> already built into the <strong>Amado Board</strong> as an analog input. For the output, we’ll adjust the brightness of the onboard LED using a PWM signal.",
an_intro3: "These features are useful in projects that need to detect environmental changes or control devices with more precision.",

// Analog Input
an_in_title: "Analog Input",
an_in1: "We’ll read the onboard LDR light sensor by connecting a jumper from the LDR terminal to pin <code>39</code>, which is an analog input.",
an_in2: "The following program continuously reads the light intensity captured by the sensor and stores it in a variable:",
an_in3: "What does this program do?",
an_in4: "Inside the <code>repeat while true</code> block, it repeatedly executes the instructions.",
an_in5: "Pin <code>39</code> is read using the <code>read analog input</code> command.",
an_in6: "The value read is stored in the variable <code>valor_ldr</code>.",
an_in7: "This value is printed to the console for real-time monitoring.",
an_in8: "There is a pause of <strong>500 milliseconds</strong> before the next reading.",
an_in9: "Viewing the results",
an_in10: "As ambient light changes, the value of the <code>valor_ldr</code> variable also changes. This can be seen in the platform’s console:",
an_in11: "The brighter the environment, the higher the value read. In darker settings, the value decreases. This shows how the analog signal continuously represents a physical quantity.",

// Analog Output
an_out_title: "Analog Output",
an_out1: "To control the brightness of an LED, we use a technique called <strong>PWM (pulse-width modulation)</strong>. In practice, it simulates an analog signal on a digital pin.",
an_out2: "Below is an example using the PWM block to control the onboard blue LED of the <strong>Amado Board</strong> connected to pin <code>D2</code>:",
an_out3: "What does this program do?",
an_out4: "The <code>PWM</code> block is used inside a continuous <code>repeat while true</code> loop.",
an_out5: "It sets <strong>pin D2 / BLUE LED</strong> as a PWM output.",
an_out6: "The <strong>frequency</strong> is set to <code>100 Hz</code>, indicating how many cycles per second the signal is sent.",
an_out7: "The <strong>duty cycle</strong> is set to <code>512</code>, which represents 50% intensity (on a scale from 0 to 1023).",
an_out8: "By changing the duty cycle value, you can control the LED’s brightness. Lower values make the LED dimmer, and higher values increase brightness. The frequency can also be adjusted to test how different rates affect the smoothness of the light.",
an_out9: "This approach is very useful in projects like dimmers, motor speed controllers, or any application where the output needs to vary instead of just switching on or off.",

// Variables, Loops and Print - Variables Section
var_section_title: "Variables",
var_intro1: "In programming, <strong>variables</strong> are used to store values that may change over time. They are essential for storing information, performing calculations, controlling sensors, or even printing messages to the console.",
var_intro2: "To create a variable, go to the <strong>Variables</strong> category in the side menu and click <strong>Create variable...</strong>. Choose a clear and meaningful name to avoid errors and make the program easier to understand.",
var_intro3: "Once created, your variable will appear in <strong>Created Variables</strong> and can be used in blocks to set, change, or access its value.",
var_intro4: "There are different types of variables available:",
var_type_bool: "<strong>Booleans</strong>: represent true or false. Useful for checks or conditions.",
var_type_num: "<strong>Numerical</strong>: store integers, decimals, or random numbers, common in sensor readings and calculations.",
var_type_text: "<strong>Text</strong>: store phrases or words, ideal for showing messages or names.",
var_type_list: "<strong>Lists</strong>: store multiple values in a single variable. Very useful for organizing data.",
var_use_robotics: "In robotics, variables are widely used to store sensor readings such as temperature, distance, light, and more. This allows the system to make decisions or adjust behaviors based on environmental data.",
var_examples_title: "Examples of variable types",
var_list_title: "List Variables",
var_text_title: "Text Variables",
var_num_title: "Numerical Variables",
var_bool_title: "Boolean Variables",
var_print_example_title: "Practical example: using variables and print",
var_print_example_desc: "In the example below, we create two variables: a text one called <code>name</code> and a numerical one called <code>value</code>. Then we use the <strong>print</strong> block, found in the Functions → Text category, to show the values in the console.",
var_print_console_desc: "The result appears in the console as shown in the image below. This is very useful to monitor sensor values during program execution.",

// Print Section
print_section_title: 'Printing with the "print" block',
print_intro1: "The <strong>print</strong> function allows you to monitor values during program execution. This is useful for checking if sensor data or variables are correct.",
print_intro2: "To use it, go to the <strong>Functions → Text</strong> category and select the <code>print</code> block. It can be used to show plain text or variable values.",
print_ex1: "Example 1: print a fixed message",
print_ex2: "Example 2: print the value of a variable",
print_ex3: "Example 3: print inside a loop",
print_console_output: "The result of the last example appears in the platform console, showing a count from 1 to 10:",

// Loop Section
loop_section_title: "Repetition Loops",
loop_intro1: "Loops are structures that allow executing the same set of commands multiple times. They are useful for automating repetitive tasks such as counting, displaying messages, or handling lists.",
loop_intro2: "On the platform, repetition blocks are available in the <strong>Control</strong> category and include different types of loops for various purposes.",

loop_repeat_times_title: "1. Repeat a fixed number of times",
loop_repeat_times_desc: "The <code>repeat X times</code> block runs the set of commands a specific number of times. Ideal for simple counts or repeated actions.",
loop_repeat_times_explanation: "In this example, we use a <code>counter</code> variable to count up to 5. On each repetition, we print the current value.",

loop_forever_title: "2. Repeat while true",
loop_forever_desc: "The <code>repeat while true</code> block executes the commands continuously, without stopping. It is widely used in robotics projects where the program must run as long as the system is on.",
loop_forever_explanation: "In this example, the <code>counter</code> variable is incremented every second, and its value is printed to the console repeatedly.",

loop_repeat_while_title: "3. Repeat while a condition is true",
loop_repeat_while_desc: "The <code>repeat while</code> block keeps executing the commands as long as the defined condition is true.",
loop_repeat_while_explanation: "In this example, the <code>number</code> variable is incremented until it reaches 5. The loop stops when the condition <code>number < 5</code> is no longer true.",

loop_count_title: "4. Loop with custom counter",
loop_count_desc: "The <code>count with i from X to Y by Z</code> block gives more control over the repetition, including start, end, and step values.",
loop_count_explanation: "In this example, we print the multiplication table of 2, multiplying the value of <code>i</code> in each repetition.",

loop_for_each_title: "5. Loop through each item in a list",
loop_for_each_desc: "The <code>for each item in list</code> block iterates through all elements in a list. Ideal for displaying or processing data.",
loop_for_each_explanation: "Here we have a list of names. The loop prints one name at a time until all are displayed.",

loop_break_title: "6. Break the loop with a condition",
loop_break_desc: "The <code>break loop</code> block allows stopping the loop execution before it finishes all repetitions.",
loop_break_explanation: "In this example, we count from 1 to 10, but break the loop when the counter reaches 6.",

var_loop_print_end: "All the results from the examples above can be seen in the platform console.",

// Sensors Page
sensor_title: "Sensors",
sensor_section_title: "Sensors in Robotics",
sensor_intro1: "Sensors are components that allow robots and embedded systems to perceive their surroundings. They capture information such as temperature, light, distance, humidity, and more, converting this data into signals that can be processed.",
sensor_intro2: "On the platform, blocks related to sensors are available in the <strong>Sensors</strong> category.",

// IR Sensor Section
sensor_ir_title: "Infrared Sensor (IR)",

sensor_ir_desc1: "The infrared (IR) sensor is a simple digital component widely used in robotics, especially in projects such as line-following robots. It detects the presence or absence of objects based on infrared light reflection, returning digital values: <strong>1</strong> when there is no reflection and <strong>0</strong> when it detects a nearby object.",

sensor_ir_desc2: "This sensor has <strong>3 pins</strong> (VCC, GND, and Signal) and can be easily connected to the <strong>Amado Board</strong> using the digital input pins such as <code>D35</code>, <code>D39</code>, <code>D36</code>, and <code>D34</code>. The board already has a proper slot for direct connection, making the assembly quick and simple.",

sensor_ir_desc3: "In addition to line-following robots, the IR sensor can be used in counting systems, safety barriers, object presence detection, and other applications where simple obstacle detection is needed.",

sensor_ir_example_title: "Example: continuous reading of the IR sensor",

sensor_ir_steps: "What does this program do?",


// Temperature and Humidity Sensor
sensor_dht_title: "Temperature and Humidity Sensor DHT11/22",
sensor_dht_desc1: "The DHT11/22 sensor is used to measure two important environmental variables: <strong>temperature</strong> and <strong>relative humidity</strong>. It is commonly used in automation projects, weather stations, and environmental control.",
sensor_dht_desc2: "For the sensor to work properly with the <strong>Amado Board</strong>, it must be connected to a <strong>digital pin</strong>. We recommend using pins D5, D15, D16, D17, D18, D19, D21, D22, or D23. In this example, we’ll use pin <code>D17</code>.",
sensor_dht_desc3: "How does the example above work?",
sensor_dht_step1: "We initialize the DHT11/22 sensor and specify the connection pin.",
sensor_dht_step2: "We enter a loop that continuously repeats while the system is powered.",
sensor_dht_step3: "In each loop, the <strong>temperature</strong> and <strong>humidity</strong> readings are updated and stored in variables.",
sensor_dht_step4: "These values are displayed in the console using the <code>print</code> block.",
sensor_dht_step5: "A 1-second pause between readings is very important to ensure proper sensor operation.",

// Ultrasonic Sensor
sensor_ultra_title: "Ultrasonic Distance Sensor HCSR04",
sensor_ultra_desc1: "The HCSR04 ultrasonic sensor is used to measure distances accurately using sound waves. It sends a sound signal (trigger) and measures the time until the echo returns after bouncing off an object. Based on this time, the distance is calculated.",
sensor_ultra_desc2: "The <strong>Amado Board</strong> has a dedicated space to connect this sensor directly to pins <code>D17</code> (trigger) and <code>D34</code> (echo), making its use in robotics projects easier.",
sensor_ultra_desc3: "How does the example above work?",
sensor_ultra_step1: "We initialize the sensor by specifying the trigger (D17) and echo (D34) pins, along with a timeout.",
sensor_ultra_step2: "We use a <strong>continuous loop</strong> to measure distance repeatedly.",
sensor_ultra_step3: "On each repetition, the measured distance is stored in a variable.",
sensor_ultra_step4: "The value is printed to the console to monitor real-time readings.",
sensor_ultra_step5: "We add a 500-millisecond pause to avoid overly rapid readings and ensure stability.",
sensor_ultra_note: "Note: Readings may vary, showing very high values or even -1. To improve reliability, implement a simple filter to discard readings outside the expected range.",

// RFID Module
sensor_rfid_title: "RFID Reader RC522",
sensor_rfid_desc1: "RFID (Radio Frequency Identification) is a technology used to identify objects or people through cards or tags that emit signals. It is widely used in access control, attendance systems, and asset tracking.",
sensor_rfid_desc2: "The module used in this example is the RC522, which communicates via SPI. It reads the UID (unique ID) of RFID cards and can also access the internal memory of the card for reading and writing data.",
sensor_rfid_desc3: "The connection of the module to the Amado Board must follow the correct pin mapping. Some pin names are the same, while others differ between the module, the block, and the board. See the recommended mapping:",
sensor_rfid_map1: "3.3V → 3.3V",
sensor_rfid_map2: "GND → GND",
sensor_rfid_map3: "SCK (module) = SCK in block = D18 / CLK on board",
sensor_rfid_map4: "MOSI = MOSI in block = D23 / MOSI on board",
sensor_rfid_map5: "MISO = MISO in block = D19 / MISO on board",
sensor_rfid_map6: "RST = RST in block = D22 / SCL on board",
sensor_rfid_map7: "SDA (on module) should be connected to CS in the block, we recommend using D5 as in the image.",
sensor_rfid_desc4: "Although the RST and CS pins can be connected to other digital pins (like D17, D21, or D22), we recommend following the example for better compatibility.",
rfid_libraries_desc: "To ensure the RC522 RFID reader blocks function correctly, it is necessary to install the <code>mfrc522</code> library, which enables communication and reading of RFID cards.",
rfid_verify_library: "After clicking the <strong>“Install library”</strong> button, you can verify the installation by checking the console message: <code>RFID library mfrc522 installed successfully.</code>",
rfid_verify_file: "You can also confirm the presence of the library by opening the <strong>Files</strong> tab. Double-click the refresh button and check if the file <code>mfrc522.py</code> appears in the board's memory.",
sensor_rfid_desc6: "Below we see a basic program that reads an RFID card and displays the results in the console.",
sensor_rfid_expl_title: "How does the example above work?",
sensor_rfid_step1: "We initialize the module by informing all SPI connection pins.",
sensor_rfid_step2: "We enter a continuous loop that constantly checks if a card is present.",
sensor_rfid_step3: "If a card is detected (status = 0), a message is printed in the console and the UID is read and shown.",
sensor_rfid_step4: "Even when no card is present, the status and tag type are shown to help with debugging.",
sensor_rfid_step5: "We add a 500-millisecond delay to avoid very fast repetitions.",
sensor_rfid_console_desc: "Below you can see how the results appear in the platform console, showing the status, tag type, and UID when a card is detected.",

// Actuators Page
// Actuator Section
actuator_section_title: "Actuators",
actuator_introduction: "Actuators in Robotics",
actuator_intro1: "Actuators are devices that receive commands from a system and perform a physical action in the real world. They convert electrical signals into motion, sound, light, heat, or other forms of response.",
actuator_intro2: "In robotics and automation, actuators are essential for interacting with the environment, enabling you to turn on lights, control motors, open valves, sound buzzers, among others.",
actuator_intro3: "On the platform, actuator blocks are available in the <strong>Outputs and Actuators</strong> category. Each type of actuator will have its own blocks with specific commands.",

// Relay Module Section
relay_title: "Relay Module",
relay_desc1: "The relay is a component that works like an electronically controlled switch. It allows turning high-power devices (such as lamps, fans, or appliances) on or off using a digital signal from the board.",
relay_desc2: "In the relay block, you can choose the pin to which it is connected and the desired command: <strong>on</strong> or <strong>off</strong>. It is important to ensure the relay module is properly powered (usually 5V and GND), and that the connected load is isolated and securely attached for safety.\n\nImportant: many relay modules are activated with signal 0 (logic low). That means using the 'off' command in the block will activate the relay (turning the device on). Conversely, the 'on' command will deactivate the relay (turning the device off).",
relay_example_title: "Example: turning on a lamp with delay",
relay_example_desc: "In the example below, we use the relay block to simulate lamp control. When the program starts, the relay is activated (lamp turns on), and after 3 seconds, it turns off. This type of control can be used in applications like timers, presence simulation, or home automation.",
relay_example_note: "This simple timer example could also be used within a <strong>condition</strong> (e.g., when detecting an RFID card, presence, time, etc.) to make automatic decisions in the program.",

// Servo Motor Section
servo_title: "Servo Motor",
servo_desc1: "The servo motor is a commonly used actuator in robotics and automation projects. It allows positioning a shaft at specific angles, usually between 0 and 180 degrees. This is ideal for controlling doors, mechanical arms, levers, shafts, or systems requiring precise and controlled movements.",
servo_desc2: "On the platform, servo control is done in two steps: first, use the <strong>Initialize Servo Motor</strong> block to define the connection pin and name of the servo, then use the <strong>Move Servo</strong> block to set the desired angle. You can use custom names (like servo1, servo2, etc.), allowing you to control multiple servos in the same project.",
servo_desc3: "The <strong>Amado Board</strong> has specific spots for connecting servo motors: <strong>D15</strong> and <strong>D16</strong> are labeled as <code>SERVO A</code> and <code>SERVO B</code>, respectively. Next to these pins, there is a set of 3 labeled pins: <code>3.3V</code>, <code>VS</code>, and <code>5V</code>. To power the servo correctly, you must <strong>make a jumper between the VS pin and the 5V pin</strong>. This ensures the signal pin has enough power to operate the servo properly.",
servo_desc4: "Servos typically have standard color-coded wires: <strong>brown</strong> (GND), <strong>red</strong> (VCC), and <strong>yellow</strong> (signal). The board already has the appropriate connector layout to plug these in directly, making installation easier.",

servo_basic_title: "Example 1: control with fixed positions",
servo_basic_desc: "This example moves the servo to three fixed positions: 0°, 90°, and 180°, with a short delay between movements. It’s ideal to demonstrate basic servo control and how to directly set angles.",
servo_basic_steps: "What does this program do?",
servo_basic_step1: "Initializes the servo on pin D15.",
servo_basic_step2: "Moves the servo to 0°, waits 1 second.",
servo_basic_step3: "Moves to 90°, then 180°, with delays between.",
servo_basic_step4: "The cycle repeats continuously.",

servo_smooth_title: "Example 2: continuous movement with loop",
servo_smooth_desc: "In this example, a <strong>for loop</strong> is used to smoothly move the servo from 0° to 180° and back. This creates fluid, continuous motion useful for radar scanning or robotic arm movement.",
servo_smooth_steps: "What does this program do?",
servo_smooth_step1: "Initializes the servo and enters a continuous loop.",
servo_smooth_step2: "Uses a loop to move from 0° to 180°, waiting 10 ms per step.",
servo_smooth_step3: "After a short pause, repeats the motion from 180° to 0°.",

servo_ultra_title: "Example 3: ultrasonic sensor control",
servo_ultra_desc: "This example combines a servo with an <strong>ultrasonic sensor</strong> to simulate an <strong>automatic door</strong> or mall gate. If the distance is less than 100mm, the servo opens the door (90°). Otherwise, it stays closed (0°).",
servo_ultra_tip: "The condition is checked with the <code>if</code> block, which can be expanded with the <code>else</code> option, enabled via the gear icon. The comparison <code><</code> is available in <strong>Mathematics → Logic</strong>.",
servo_ultra_steps: "What does this program do?",
servo_ultra_step1: "Initializes the servo and ultrasonic sensor.",
servo_ultra_step2: "Continuously reads distance (in millimeters).",
servo_ultra_step3: "If distance < 100mm, moves the servo to 90°.",
servo_ultra_step4: "Otherwise, returns the servo to 0°.",
servo_ultra_step5: "Reads data every 150 ms.",

// DC Motor Section
motor_title: "DC Motor",
motor_desc1: "DC (Direct Current) motors are commonly used in robotics projects to move cars, arms, conveyor belts, and more. They allow direction and speed control via digital signals.",
motor_desc2: "On the platform, we control the DC motor using three pins: <strong>PWM</strong> for power (speed), and <strong>DIR1</strong> and <strong>DIR2</strong> for direction. The <code>Initialize DC Motor</code> block lets you define the pins and assign a <strong>custom name</strong> (like motor1, motor2, etc.).",
motor_desc3: "The <strong>Amado Board</strong> includes physical screw terminals on its sides for connecting up to two DC motors. These terminals are internally wired to the PWM, DIR1, and DIR2 pins of the board.",
motor_desc4: "Motor speed is controlled by values from <code>0</code> (off) to <code>1023</code> (full power). Direction is controlled by the direction block: <code>1</code> for forward, <code>2</code> for reverse, and <code>0</code> to stop. There's also a <strong>Stop Motor</strong> block to halt movement anytime.",

motor_example_title: "Example: alternating motor direction",
motor_example_desc: "The example below demonstrates how to alternate a DC motor’s direction. It rotates one way for 2 seconds, stops, then rotates the other way.",
motor_example_steps: "What does this program do?",
motor_example_step1: "Initializes the motor using PWM, DIR1, and DIR2 pins.",
motor_example_step2: "Sets max speed (1023) and moves forward (direction 1).",
motor_example_step3: "After 2 seconds, stops the motor, waits 2 more seconds.",
motor_example_step4: "Changes to reverse (direction 2), waits, then stops again.",
motor_example_step5: "The loop repeats continuously.",
motor_extra_note: "Beyond basic tests, DC motor control is key in robotics projects like line-following robots or obstacle-avoiding robots. In these cases, sensors define motor behavior so the robot can act autonomously based on the environment.",

// Buzzer Section
buzzer_title: "Buzzer",
buzzer_intro1: "The buzzer is an actuator that emits simple tones or melodies. It’s used for alarms, notifications, confirmations, or playing themed music. The Amado Board includes a built-in buzzer on pin D4, ready for use.",
buzzer_libraries_title: "Library Installation",
buzzer_libraries_desc: "To use the buzzer blocks, install two libraries:",
buzzer_verify_library: "After clicking the “Install Library” button, check the console for the message: Library rtttl installation complete.",
buzzer_verify_file: "You can also confirm by opening the Files tab. Click the refresh button twice quickly and check for <code>rtttl.py</code> and <code>songs.py</code> in the memory list.",

buzzer_block_freq_title: "1. Play sound by frequency",
buzzer_block_freq_desc: "This block plays a tone at a specific frequency (in Hz) for a duration (in seconds). 1000 Hz is a high-pitched tone. Use 0 or -1 for continuous tone.",
buzzer_block_note_title: "2. Play sound by musical note",
buzzer_block_note_desc: "This block lets you pick a musical note (like D3 or B1) and duration. Great for building custom melodies.",
buzzer_block_music_title: "3. Play preset music",
buzzer_block_music_desc: "Choose from built-in themed songs like Super Mario, Star Wars, or Picaxe. Just select the title from the list.",
buzzer_block_user_title: "Note: user-created melodies",
buzzer_block_user_desc: "There's also a block called “Play buzzer on pin with melody.” This is used with the Music tab to run your own composed songs. It will be explained in a separate section.",

display_section_title: "OLED SSD1306 Display",
display_intro1: "The OLED SSD1306 display is a small screen with I2C communication, widely used in electronics and robotics projects to show information such as text, sensor values, or system messages.",
display_intro2: "On the platform, the blocks for controlling the display are found in the Screens category. Before using it, you must install the ssd1306 library by clicking the Install library: ssd1306 block.",
display_connection_info: "The Amado Board has a dedicated slot for connecting the display, identified on the board as OLED DISPLAY. This connector uses I2C communication, with SDA on pin D21 and SCL on pin D22. Just plug the OLED module into the correct place and start communication using those pins in the initialization block.",
display_blocks_info: "For the text or value to appear correctly on the screen, it is essential to follow the correct block sequence: 1) clear the display, 2) write the content (message or number), and 3) update the display. The update block actually sends the content to the screen; without it, nothing will be shown.",

display_example1_title: "Example 1: Display fixed text on screen",
display_example1_desc: "In this example, we show how to position a static text on the screen using the appropriate blocks. This is the first step in any display project.",
display_example1_steps: "What does this program do?",
display_example1_step1: "Initializes the display with the correct pins (I2C: 1, SCL: 22, SDA: 21).",
display_example1_step2: "Clears the display to ensure there are no previous text residues.",
display_example1_step3: "Writes the text \"Hello\" at the desired position on the screen.",
display_example1_step4: "Updates the display so the text appears.",

display_example3_title: "Example 2: Update value using a loop",
display_example3_desc: "This example demonstrates how to create a counter that is constantly updated on the display. Great for learning how to visually manage variables.",
display_example3_steps: "What does this program do?",
display_example3_step1: "Initializes the display.",
display_example3_step2: "Creates a variable that increases in value every second.",
display_example3_step3: "Clears the display, shows the variable value, and continuously updates the screen.",

display_example4_title: "Example 3: Display LDR sensor value",
display_example4_desc: "Here we show how to integrate the display with sensors. In this case, we display the brightness value read by an LDR sensor.",
display_example4_steps: "What does this program do?",
display_example4_step1: "Initializes the display and sets up the LDR sensor reading.",
display_example4_step2: "Continuously reads the ambient brightness value.",
display_example4_step3: "Displays the value on the screen, updating every 500 milliseconds.",

// Logic and Math
logic_math_intro_title: "Logic and Math",
logic_math_intro1: "Logic and math blocks are fundamental in programming. They allow you to create conditions, perform calculations, compare values, and make decisions. They are present in virtually all types of projects — from sensor readings to motor control and rule-based actions.",
logic_math_intro2: "The Math category contains operations such as addition, subtraction, multiplication, division, rounding, square root, sine, value mapping, and more. The Logic category offers comparators (such as =, <, >), logical operators (AND, OR), and decision blocks like if, else, and else if.",

logic_math_example1_title: "Example 1: Check if a fixed number is greater than 10",
logic_math_example1_desc: "In this example, we use the if and else blocks to check if a fixed value is greater than 10. The decision block (if) allows commands to run only when a condition is true. The comparison is made using the > operator.",
logic_math_example1_steps: "What does this program do?",
logic_math_example1_step1: "Creates a variable with the value 15.",
logic_math_example1_step2: "Checks if the number is greater than 10.",
logic_math_example1_step3: "If true, prints 'Greater than 10'; otherwise, prints 'Less than or equal to 10'.",
logic_math_example1_console: "The test results are displayed in the platform's console. To view, click the Console tab at the top of the screen after running the program.",

logic_math_example2_title: "Example 2: Convert analog value to percentage",
logic_math_example2_desc: "In this example, we ask the user to enter a numeric value in the console to simulate a sensor reading. Then, we use the map block from the Math category, which converts a value from one range to another. This block is very useful in robotics projects to transform sensor readings (such as light, distance, or temperature) into more understandable scales like percentages. This helps in making decisions or displaying data to the user.",
logic_math_example2_steps: "What does this program do?",
logic_math_example2_step1: "Asks the user to enter a numeric value to simulate an analog reading.",
logic_math_example2_step2: "Converts the value to a percentage using the map block.",
logic_math_example2_step3: "Prints the converted value (in %) to the console.",
logic_math_example2_console: "The number is entered directly in the console, located at the top of the screen. The converted value is then displayed for real-time monitoring.",

logic_math_example3_title: "Example 3: Ventilation control using AND, OR, and else",
logic_math_example3_desc: "In this example, we simulate the logic of a smart ventilation system that considers both temperature and humidity levels. We use logical operators AND and OR along with conditional blocks if and else if to define the system behavior based on values.",
logic_math_example3_steps: "What does this program do?",
logic_math_example3_step1: "Creates two variables with fixed values for temperature and humidity.",
logic_math_example3_step2: "If temperature > 30 AND humidity > 70, prints 'Turn on fan and dehumidifier'.",
logic_math_example3_step3: "Else if temperature > 30 OR humidity > 70, prints 'Turn on fan only'.",
logic_math_example3_step4: "Else, prints 'Comfortable environment'.",
logic_math_example3_console: "The decision results are shown in the console, allowing you to follow the logical behavior of the program.",
logic_math_example3_tip: "You can change the values of the temperature and humidity variables to see how the program's behavior changes. This helps better understand the use of combined conditions and logical operators in real scenarios.",


//Page Music
music_section_title: "Music",
music_section_intro: "In this section, we will learn how to use the platform's Music tab to compose custom melodies visually through an interactive piano roll. These melodies can be tested and later used in blocks with the buzzer.",
music_features_intro: "The interface has several useful controls:",
music_editor_info: "The piano roll works as follows: the columns represent time, and the rows represent musical notes. You can select one note per column. If you skip a column, that moment will be silent.",

music_example1_title: "Example: Creating the melody \"Do-Re-Mi-Fa-Sol-La-Si\"",
music_example1_desc: "Let's create a simple melody using basic musical notes.",

music_example2_title: "Playing the melody with the buzzer",
music_example2_desc: "After saving the melody, go to the Blocks tab. In Outputs and Actuators → Buzzer, you will find the block Play buzzer on pin. By selecting the created melody, you can play it using the buzzer on the board.",

music_extra_info_title: "Additional tips",
music_extra_info: "If you right-click on the melody block, you will see useful options such as Delete or Export that individual melody.",

music_example3_title: "Example: “Happy Birthday” Melody",
music_example3_desc: "In this example, we create a simple version of the 'Happy Birthday' melody using the platform’s music editor. This is a great way to practice composition, work with rhythm, and test playback with the buzzer.",
music_example3_notes: "The notes used, in order, are: C4, C4, D4, C4, F4, E4 / C4, C4, D4, C4, G4, F4. Each group represents a musical phrase, and you can continue composing the next parts of the song in the same way.",
music_example3_bpm: "Note that the BPM was set to 130, which makes the song a bit faster. You can try different BPM values to adjust the melody speed as you prefer.",
music_example3_tips: "This type of exercise helps you understand how timing and pauses affect music playback. It also allows you to practice organizing notes on the piano roll and explore creative possibilities.",

music_section_intro_title: "Introduction",

//Page Resources and features

resources_section_title: "Resources and Features",
resources_intro: "In this section, we will present some extra features of the platform that can facilitate the use and organization of your projects. These details are often overlooked, but they make the experience with the environment even more efficient.",

resources_project_block_title: "Project Data Block",
resources_project_block_desc: "Whenever a new project is created, the Project Data block appears automatically. It is very useful as it allows you to fill in the author's name, the project ID (if integrated with IoT), and a custom description. This description is used as the filename when you export the project, making it easier to identify on your computer.",
resources_project_block_info: "You can also find this block under Functions → Bipes and manually insert it into your project if needed.",

resources_mult_projects_title: "Working with multiple projects",
resources_mult_projects_desc: "At the top of the platform there is a user button (profile icon). Clicking on it opens a side panel with project management options.",
resources_mult_projects_usage: "You can create multiple projects by clicking the + button and switch between them quickly. This feature is great for organizing different tasks, drafts, or code versions.",
resources_mult_projects_lang_title: "Platform language",
resources_mult_projects_lang: "In this panel, you can also change the interface language, choosing between Portuguese, English, or Spanish. This option appears at the bottom of the panel.",

resources_topbar_title: "Other top bar buttons",
resources_topbar_desc: "In addition to project management, the top bar includes several other useful buttons:",
resources_topbar_item_python: "<strong>Python (icon)</strong>: opens the MicroPython installation page for your board.",
resources_topbar_item_download: "<strong>Download</strong>: downloads the project code in <code>.xml</code> format.",
resources_topbar_item_upload: "<strong>Upload</strong>: allows loading a previously saved <code>.xml</code> file.",
resources_topbar_item_connect: "<strong>Connect</strong>: USB icon button to connect the board to the platform.",
resources_topbar_item_play: "<strong>Play</strong>: runs the program loaded on the board.",

resources_save_title: "Save the program to the board (main.py)",
resources_save_intro: "One of the most important features of the platform is the ability to save the program directly to the board's memory, allowing it to run automatically whenever the board is powered on. This is done by saving the code with the name main.py.",
resources_save_context: "To do this, you need to use the Files tab, which works as an internal file manager for the board. This feature is a differential of the platform, as it allows you to save, edit, delete, and run files directly from the device’s internal memory.",
resources_save_steps: "Follow the steps below to save your program as 'main.py':",
resources_save_check: "After saving, double-click the refresh button to update the board’s file list. You will see the new main.py file with the run at boot label, indicating that this will be the program automatically executed when the board is powered on.",
resources_save_edit: "In addition to saving, you can edit or delete files directly from this tab. To delete main.py, simply click the trash icon next to the file name.",
resources_save_tip: "Important note",
resources_save_note: "In some cases, the program may continue running even after clicking Stop. If this happens, click the disconnect icon, press the board’s reset button, and reconnect. The play icon should reappear, allowing you to access the board’s memory again.",
resources_save_note2: "This behavior is common when you want to delete <code>main.py</code> or return to normal usage with the platform. Whenever you finish a project and want to use it with an external power source, save it as <code>main.py</code>.",

resources_save_step1: "Make sure the <strong>board is connected</strong> and <strong>no program is running</strong> (the <code>Play</code> button must be visible).",
resources_save_step2: "Go to the <strong>Files</strong> tab.",
resources_save_step3: "In the \"Blocks for code\" section, click <code>code.bipes.py</code> to view your program.",
resources_save_step4: "Rename the file by clicking on <strong>code.bipes.py</strong> at the top of the editor and changing it to <code>main.py</code>.",
resources_save_step5: "Click <strong>Save a copy</strong>.",

resources_save_step1: "Make sure the <strong>board is connected</strong> and <strong>no program is running</strong> (the <code>Play</code> button must be visible).",
resources_save_step2: "Access the <strong>Files</strong> tab.",
resources_save_step3: "In the \"Blocks to code\" section, click <code>code.bipes.py</code> to view your program.",
resources_save_step4: "Rename the file by clicking <strong>code.bipes.py</strong> at the top of the editor and changing it to <code>main.py</code>.",
resources_save_step5: "Click <strong>Save a copy</strong>.",

};
