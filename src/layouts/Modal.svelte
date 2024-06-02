<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import  Toc from './Toc.svelte'
  export let id;
  export let onClose;

  let content;
  let isClosing = false;
  let tocHtml = '';
  const modalsData = {
    modal1: {
      title: 'About',
      content: `
      <p>
          This is my project portfolio from year 9. It took some time to make, but I'm happy with the result. It was developed using Sveltekit (Javascript Framework).
        </p>
        <p>More on Sveltekit here: <a class='fancy' href="https://kit.svelte.dev/">Sveltekit</a></p>
        <p>
          Click on the images to view the content for each section.
        </p>
        <p><a href='https://github.com/Akash-whitgift/Computerscienceportfolio'> Source code here</a></p>
<style>
  a {
    color:white;
    text-decoration: underline;
  }
  </style>



      `,
      image: "/about.jpg"
    },
    modal2: {
      title: 'Python',
      content: `
      <h2>Variables</h2>
    <p>Variables are places in memory that can change, they can be assigned using assignment statements ('=' in python) as shown below.</p>
    <pre><code>
x = 13
y = x
    </code></pre>

    <h3>Naming Variables</h3>
    <p>When naming a variable you cannot use the following:</p>
    <ul>
        <li>You cannot start with a number</li>
        <li>You cannot use a reserved word (e.g. int)</li>
        <li>You can only use alphanumeric characters (A-z 0-9)</li>
    </ul>

    <h3>Data Types</h3>
    <p>Each variable has a datatype. The datatypes in python are as below:</p>
    <ul>
        <li><strong>String:</strong> 2 or more characters surrounded by ” or ‘</li>
        <li><strong>Integer:</strong> whole number</li>
        <li><strong>Real:</strong> Number with a decimal part (in python it is float)</li>
        <li><strong>Boolean:</strong> true/false</li>
        <li><strong>Char:</strong> A single character</li>
    </ul>

    <h3>Casting</h3>
    <p>Python automatically assigns data types when defining a variable, although you can manually force it to use a certain data type using the following commands:</p>
    <pre><code>
str()   # forces string datatype
int()   # forces integer datatype
float() # forces real number (floating point) datatype
bool()  # forces boolean datatype
    </code></pre>
    <p>Forcing a datatype is called casting.</p>

    <h3>Strings</h3>
    <p>In python strings are technically immutable (cannot be changed) lists of characters, but we can access individual characters.</p>
    <pre><code>
name = 'Jimmy'
print(name)
print(name[1])
    </code></pre>
    <p>This code outputs:</p>
    <pre><code>i</code></pre>

    <h2>Operators</h2>
    <p>In python we use operators, some of these include:</p>
    <ul>
        <li>+ (addition)</li>
        <li>– (subtraction)</li>
        <li>/ (division)</li>
        <li>* (multiplication)</li>
        <li>% (Modulus – find remainder from division)</li>
        <li>// (Floor division, round down after dividing)</li>
    </ul>
    <p>When doing arithmetic, BIDMAS matters!</p>

    <h2>Inputs</h2>
    <p>A piece of data provided by the user to be used in the program.</p>
    <p>It is used in the structure below:</p>
    <pre><code>variable = input()</code></pre>
    <p>Inputs should always be accompanied by a message (prompt) to the user.</p>
    <pre><code>
print('Enter your name')
name = input()
# or you can do it like this
name = input('Enter your name: ')
    </code></pre>

    <h2>Selection</h2>
    <p>In python, selection is achieved by the if statement.</p>
    <p>Real world example:</p>
    <blockquote>
        Are you good at time management<br>
        If yes: take IB for sixth form<br>
        If no: take A level for sixth form.
    </blockquote>
    <p>In python this can be done as below:</p>
    <pre><code>
name = input('What is your name?')
if name == 'Jimmy':      #condition
    print('Hello Jimmy') # action if condition is true
else:
    print('not Jimmy')   # action if the condition is false
    </code></pre>
    <p>When using selection you use a boolean expression (returns True/False value) to check whether code is run. In python the boolean expressions are:</p>
    <ul>
        <li>==</li>
        <li>&lt;=</li>
        <li>&gt;=</li>
        <li>&lt;</li>
        <li>&gt;</li>
        <li>!=</li>
    </ul>

    <h2>Lists</h2>
    <p>A list in python is a collection of values with a single identifier (These are often called arrays in other languages).</p>
    <pre><code>
Fruits = ['Apple','banana','orange']
Scores = [100,15,61,97]
    </code></pre>
    <p>Each value in an array is an element. The advantages of arrays are that it removes the need for multiple variables, it also allows us as developers to process the values more easily.</p>
    <p>Every element in an array has an index position, these positions always start at 0.</p>
    <p>To add items to an array (list) we use the array.append() command.</p>
    <pre><code>
Fruits.append('Pear')
print('Fruits')
# Before if we printed Fruits we would get:
# ['Apple','banana','orange']
# Now if we print this:
# ['Apple','banana','orange','Pear']
    </code></pre>
    <p>To remove from lists we use the array.remove() command.</p>
    <pre><code>
Fruits.remove('Apple')
# If we print this array we get:
# ['banana','orange','Pear']
    </code></pre>

    <h2>Iteration</h2>
    <p>The process of repeating one or more lines of code – this is accomplished using a loop.</p>
    <p>Examples of repeated actions in technology:</p>
    <ul>
        <li>Sending a Whatsapp message to multiple people in a group</li>
        <li>Updating DNS servers</li>
        <li>Retrieving data from a database</li>
        <li>Updating websockets</li>
        <li>Waiting for data to be received</li>
        <li>Scanning a network</li>
        <li>Multi snap in snapchat</li>
        <li>Repeating animations in a game</li>
        <li>GPS pinging satellites</li>
        <li>Refreshing frames on a screen</li>
        <li>Collaborative team game stats</li>
        <li>Finding images using a search engine</li>
    </ul>

    <h3>Types of Loops</h3>
    <p>A loop is a set of instructions that is repeated until a condition is met. There are two types of loops:</p>
    <ul>
        <li><strong>Condition Controlled</strong> – Repeatedly loops while a condition is true (maximum number of repetitions is infinite)</li>
        <li><strong>Count Controlled</strong> – Repeats a set number of times.</li>
    </ul>

    <h3>Condition Controlled Loops</h3>
    <p>In python the way you do a condition controlled loop is using the while loop function. To use a condition controlled loop you use a While loop. While loops repeatedly execute while the condition is true.</p>
    <pre><code>
name = "" # or name = input()
while name != "Arjun":
    name = input()
    print("Not Arjun, try again")
# This Loop range is 0 to infinite
    </code></pre>
    <p>We use a while loop when we don’t know how many times we need to repeat.</p>

    <h3>Count Controlled Loops</h3>
    <p>A control construct that allows one or more lines of code to be repeatedly executed for a set number of times. – the number of repetitions needs to be known.</p>
    <p>Some examples include:</p>
    <ul>
        <li>Printing group messages</li>
        <li>Syncing changes of a document for multiple people</li>
        <li>Taking inputs for a sequence</li>
        <li>Sending people notifications of a detention</li>
    </ul>
    <p>To use count controlled loops you use a ‘for’ loop.</p>
    <pre><code>
# Syntax of for loops:
for counter in range(0,10):
    print('counter')
# 10 is Up to but not including
# This code runs 10 times.
    </code></pre>
    <p>For Loops containing counters:</p>
    <pre><code>
n = 2
for counter in range(0,30,n):
    print(counter)
# In the code above the variable counter starts at zero and counts up, executing the code while the variable counter is under 30.
# It also uses the range, with the first number being the starting value, the second number being the max value,
# and the final number (3rd) being the increments that counter is increased by (n) in this case that is 2.
    </code></pre>
    <style>
  a {
    color:white;
    text-decoration: underline;
  }
  </style>
      `,
      image: "/Ad01.jpg"
    },
    modal3: {
      title: 'HTML',
      content: `

      <h2>Steps to Connect to a Website</h2>
    <ol>
        <li>You type in a Web address (URL - Uniform Resource Locator) into the address bar in the browser, such as <a href="https://arjun.bond">https://arjun.bond</a></li>
        <li>Once you get the IP address, you connect and then are able to request a page from the Server.</li>
        <li>The server sends the webpage to your computer via the HTTP protocol as HTML code.</li>
        <li>The browser reads the HTML code and renders the page.</li>
    </ol>

    <h2>HTML Basics</h2>
    <p>HTML stands for HyperText Markup Language and it is used for creating webpages.</p>
    <p>A web browser is designed to read HTML and then translate it to the things you can see on the screen.</p>

    <h3>Tags</h3>
    <p>Tags are surrounded by &lt; chevrons &gt;.</p>

    <h3>Boilerplate Code</h3>
    <p>Essential HTML code that all web pages have:</p>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
    &lt;head&gt;
    
    &lt;/head&gt;
    &lt;body&gt;
    
    &lt;/body&gt;
&lt;/html&gt;
    </code></pre>

    <h3>Boilerplate Elements</h3>
    <ul>
        <li>&lt;!DOCTYPE html&gt; is always the first line of an HTML page.</li>
        <li>&lt;html&gt; - tells the browser it is HTML code for the page.</li>
        <li>&lt;head&gt; - contains things that aren't displayed in the main body of your page like the title.</li>
        <li>&lt;body&gt; - contains all the content you want to see displayed.</li>
    </ul>

    <h2>Images and Links</h2>
    <h3>Accessibility</h3>
    <p>Having the ability to access something. Users of IT systems can have a wide range of needs, conditions, or disabilities.</p>
    <ul>
        <li>Use captions in videos.</li>
        <li>Use colors with good contrast.</li>
        <li>Voice recognition.</li>
        <li>Better error messages.</li>
    </ul>

    <h3>Attributes</h3>
    <p>An attribute is an extra piece of information provided in a tag. For example, common image attributes are <code>src</code>, <code>height</code>, and <code>width</code>.</p>
    <p>Pixelation occurs when an image is larger than it should be.</p>

    <h2>CSS - Cascading Style Sheets</h2>
    <p>HTML + CSS: HTML describes the structure of a webpage, then CSS describes the styling (presentation of the page).</p>
    <p>Every time we write CSS, we select the tag we want to work with, say which property we want to adjust, and give it the value we want to assign it.</p>

    <h3>Using CSS in an HTML Page</h3>
    <p>There are 3 options:</p>
    <ol>
        <li>Write the CSS inside of the individual HTML tags.</li>
        <li>Write the CSS styles inside of the <code>&lt;style&gt;&lt;/style&gt;</code> tags in the <code>&lt;head&gt;</code> section of the HTML.</li>
        <li>Create an external CSS file with the styles defined in it and link the HTML page to the CSS file.</li>
    </ol>

    <h2>The DIV Tag</h2>
    <p>The division <code>&lt;div&gt;</code> tag helps us to split the layout of a webpage into sections.</p>
    <p>We can create divisions in our pages by surrounding the blocks with these tags.</p>
    <p>When you group together HTML elements using <code>&lt;div&gt;</code> tags, you can ask CSS to make changes to elements within the DIV.</p>
    <p>We can think of DIVs as a way of breaking our page into boxes or containers. You can also have DIVs inside of DIVs.</p>
    <style>
  a {
    color:white;
    text-decoration: underline;
  }
  </style>
  
      `,
      image: "/HTML.webp"
    },
    modal4: {
      title: 'AI/Emerging Technologies',
      content: `
      <h2>Autonomous vehicles</h2>
      <h3>Autonomous Vehicles Components</h3>
    <h4>Sensors</h4>
    <ul>
        <li>Lasers</li>
        <li>Radar</li>
        <li>Cameras</li>
        <li>(LiDAR)</li>
        <li>Ultrasonic/IR Sensors at front/rear</li>
    </ul>

    <h3>Properties of Autonomous Vehicles</h3>
    <ul>
        <li>Rounded shape to maximize sensor field of view</li>
        <li>Computer specifically designed for self-driving</li>
        <li>Back up systems for steering, braking, computing, and more</li>
        <li>Electric batteries to power the vehicles</li>
    </ul>

    <h2>Technology Explained</h2>
    <h3>AutoPilot</h3>
    <p>To assist the driver.</p>

    <h3>Anti-Lock Brakes</h3>
    <p>Warns or takes action in case of danger, and applies the brake automatically.</p>

    <h3>Adaptive Cruise Control</h3>
    <p>Keeps the vehicle at a safe distance behind cars ahead of it.</p>

    <h3>Lane Departure Warning System</h3>
    <p>Warns if you are leaving a lane.</p>

    <h3>Intelligent Parking</h3>
    <p>Parks automatically and uses parking sensors.</p>

    <h3>Blind Spot Monitoring</h3>
    <p>Checks the blind spot.</p>

    <h2>Artificial Intelligence</h2>
    <h3>What is AI?</h3>
    <p>Ai is a piece of software that takes an input, and produces an output based on many different factors</p>
    <h4>Types of AI</h4>
    <ul>
      <li>Narrow AI - AI that is designed for a specific task, examples include LLMs (Large Language Models)</li>
      <li>General AI - AI that can perform any intellectual task that a human can do</li>
      </ul>
    <p>Every year, computers become:</p>
    <ul>
        <li>Faster</li>
        <li>Smaller</li>
        <li>Able to store more data</li>
        <li>Better connected</li>
    </ul>
    <p>AI is used in many things, even currently, here are some examples:</p>
    <ul>
        <li>Travel (such as Google Maps)</li>
        <li>Entertainment - Personalised Video Recommendations, such as on platforms like YouTube</li>
        <li>Healthcare - AI can be used to diagnose diseases</li>
        <li>Finance - AI can be used to predict stock prices</li>
        <li>Education - AI can be used to personalise learning</li>
        <li>Security - AI can be used to detect malware</li>
        </ul>
    <h2>Crypto Currencies</h2>
    <h3>Distributed Ledgers</h3>
    <ul>
        <li><strong>Ledger:</strong> a database/record of all transactions.</li>
        <li><strong>Distributed ledger:</strong> multiple parties have a copy of the ledger.
            <ul>
                <li>If 50%+ agree on ledger contents, it's trustworthy.</li>
            </ul>
        </li>
    </ul>
    <h3>Blockchain</h3>
    <p>A system where a record of transactions are maintained across computers in a peer to peer network.  </p>
    <h4>Three benefits of blockchain:</h4>
    <ol>
      <li>More trust, as everyone can check transactions</li>
      <li>Transparent, as the ledger is public and accessible to anyone</li>
      <li>More Secure, as everyone can check transactions and the ledger is public</li>
    </ol>
    <h4>Three drawbacks of blockchain:</h4>
    <ol>
      <li>Slow, as every transaction needs to be verified by multiple computers</li>
      <li>Expensive, as the computers need to be paid for their work</li>
      <li>Not private, as everyone can see the transactions</li>
    </ol>
    <h4>Uses of the blockchain:</h4>
    <ol>
      <li>Voting - If election process is put on blockchain, run by multiple parties, it can prevent corruption, as it is more difficult to manipulate the results.</li>
      <li>Distributed Asset Trading - easily authenticating transactions, instead of much paper.</li>
      <li>Smart Contracts - enforcing a contract via the blockchain.</li>
    </ol>

    <p>for more info on cryptocurrencies watch <a href='https://www.youtube.com/watch?v=rYQgy8QDEBI'>this video</a></p>
    <iframe  src="https://www.youtube.com/embed/rYQgy8QDEBI?si=SHbXdFJN_g3gVSd6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <style>
      a {
        color:white;
        text-decoration: underline;
      }
      iframe {
        width: 75%;
        height: auto;
        aspect-ratio: 16/9;
      }
      `,
      image: "/AiEmer.jpg"
    },
    modal5: {
      title: 'Amazon Technologies Project',
      content: `
      <h1>Amazon Prime Chat</h1>

<h2>What is it?</h2>
<ul>
    <li>Amazon Prime Chat is an AI chatbot that allows all customers and employees easy access to all things Amazon related.</li>
    <li>Employees such as customer support employees can use it to give quicker assistance to people.</li>
    <li>Employees such as technical support can use it to diagnose and fix issues.</li>
    <li>Customers can use it to find a specific product, or to help them decide what product to purchase.</li>
</ul>

<h2>The Product</h2>
<ul>
    <li>The chatbot consists of a custom model, which is based upon GPT-4 from OpenAI, although this model can also be made in-house.</li>
    <li>The product will be hosted on a section of amazon.com, as well as a custom model in an intranet for employees.</li>
    <li>The backend can be hosted on AWS, but can also be offloaded to Google Cloud Platform or Microsoft Azure.</li>
</ul>

<h2>Cost</h2>
<ul>
    <li>The chatbot will be available to everyone, and therefore free, although Prime subscribers can have more functionality such as order tracking and summaries of recent activity on the first launch/visit.</li>
    <li>The cost of the custom model will be around £600,000 per annum (if using OpenAI custom model).</li>
    <li>Otherwise, the cost will be greater, possibly up to £50 million.</li>
    <li>This product is free, although it will make money by logging user activity and selling products at a marginally higher price.</li>
</ul>

<h2>What does it look like?</h2>
<img src='/Primechat.jpg' alt='Amazon Prime Chat' style='width: 50%%;'>

<h2>How this will benefit Amazon</h2>
<ul>
    <li>Since Amazon makes many transactions, this AI can help users make more due to the suggestion of products.</li>
    <li>It can also recommend more relevant products than the current algorithm.</li>
    <li>It will help support staff provide support, therefore retaining more customers who will pay.</li>
    <li>It will help technical staff help other staff, or to debug issues and resolve them, leading to more productive time or uptime, which will result in more money made.</li>
</ul>

<h2>Development Time</h2>
<h3>OpenAI Custom Model</h3>
<ul>
    <li>Model Training: 1 year</li>
    <li>Testing: 2 months</li>
    <li>Total: 1 year 2 months</li>
</ul>

<h3>In-house Model</h3>
<ul>
    <li>Infrastructure: 4 months</li>
    <li>R&D: 2 years</li>
    <li>Development: 1 year</li>
    <li>Testing: 2 months</li>
    <li>Total: 3 years, 6 months</li>
</ul>
<a href="https://www.arjun.bond/wp-content/uploads/2024/05/Amazon-Prime-Chat-1.pdf" download="" target="__blank"><p>To get the information above in a pdf, click here</p></a>
<style>
  a {
    color:white;
    text-decoration: underline;
  }
  @media (max-width: 600px) {
  img {
    width: 100%;
    height: auto;
  }
}
  </style>
      `,
      image: "/amazon.jpeg"
    }
  };

  onMount(() => {
    content = modalsData[id].content;
    tocHtml = generateTOC(content);
  });

  function handleClose() {
    isClosing = true;
    setTimeout(() => {
      if (typeof onClose === 'function') {
        onClose();
      }
      isClosing = false;
    }, 1); // Matches the duration of the fade-out transition
  }





function generateTOC(content) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = content;
  const headings = tempDiv.querySelectorAll('h2, h3');
  let tocHtml = '';
  headings.forEach((heading, index) => {
    const level = heading.tagName.toLowerCase();
    const text = heading.textContent;
    const id = `section-${index}`; // Generate unique ID for each section
    heading.id = id; // Assign ID to the heading for linking
    const listItem = `<li><a href="#${id}"><${level}>${text}</${level}></a></li>`;
    tocHtml += listItem;
  });
  return `<ul>${tocHtml}</ul>`;
}

function scrollToSection(id) {
  const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
}








</script>

<div class="modal {isClosing ? 'fade-out' : 'fade-in'}" id={id} transition:fade={{ duration: 300 }}>
  <div class='container'>
  <span class="close" id='closecross' on:click={handleClose}>&times;</span>
  <img class="modal-image" src={modalsData[id].image} />
  
  <div class="modal-text">
    <h1>{modalsData[id].title}</h1>
    <div class="toc">
      <Toc class='toc'> </Toc>
      </div>
    <div class="content-container">
<hr>
      <div class="content">
        {@html content}
      </div>
    </div>
  </div>
  </div>
</div>

<style>

  .modal {
    display: block;
    position: fixed;
    z-index: 1;
    padding-top: 60px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: hidden;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 1;
    transition: opacity 0.3s ease;
  }
  .container {
    overflow: visible;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  .fade-in {
    opacity: 1;
  }
  .fade-out {
    opacity: 0;
  }
  .modal-image {
    display: block;
    margin: 0 auto;
    width: 110%;
    height: 110vh;
  object-fit: cover;
  --webkit-user-select: none;
  user-select: none;
  -webkit-user-drag: none;
  transform: translateX(-2.5%);
  transform: translateY(-10%);
  overflow: hidden;
  }

  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  .close:hover,
  .close:focus {
    text-decoration: none;
    cursor: pointer;
  }
  .modal-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(20, 20, 20, 0.8);
    padding: 20px;
    border-radius: 10px;
    text-align: Left;
    width: 80%;
    height: 80%;
    color: white;
    overflow-y: scroll;
  }
  h1 {
    font-size: 3.5em;
    margin: 5px;
  }
  @media (max-width: 600px) {
  h1 {
    font-size:2.5em;

  }
  img {
    width: 100%;
    height: auto;
  }
}
.modal-text::-webkit-scrollbar {
width: 2px;
  border-radius: 80%;
}
.modal-text::-webkit-scrollbar-track{
background: #000000;
  width:0;
  visibility: hidden;
}
.modal-text::-webkit-scrollbar-thumb {
background: #ffffff;
border-radius: 2px;
}

  .content-container {
    flex: 1;
    padding-right: 20px; /* Adjust spacing between TOC and content */
    overflow-y: hidden; /* Allow scrolling if content is too long */
  }


</style>
