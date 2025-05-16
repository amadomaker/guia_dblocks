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

};
