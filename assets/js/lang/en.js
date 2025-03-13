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
};
