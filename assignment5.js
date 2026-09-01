const http = require("http");

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    let page = "";

    if (req.url === "/") {

        page = `
            <html>
            <head>
                <title>Home</title>
            </head>
            <body>
                <h1>My Portfolio</h1>

                <nav>
                    <a href="/">Home</a> |
                    <a href="/about">About Me</a> |
                    <a href="/skills">Skills</a> |
                    <a href="/projects">Projects</a> |
                    <a href="/contact">Contact</a>
                </nav>

                <hr>

                <h2>Welcome to My Portfolio</h2>
                <p>Hello! Welcome to my personal portfolio website.</p>
            </body>
            </html>
        `;

    } else if (req.url === "/about") {

        page = `
            <html>
            <head>
                <title>About Me</title>
            </head>
            <body>
                <h1>About Me</h1>

                <nav>
                    <a href="/">Home</a> |
                    <a href="/about">About Me</a> |
                    <a href="/skills">Skills</a> |
                    <a href="/projects">Projects</a> |
                    <a href="/contact">Contact</a>
                </nav>

                <hr>

                <p>My name is Tanvish Poojari , I am a student interested in web development and programming.</p>
            </body>
            </html>
        `;

    } else if (req.url === "/skills") {

        page = `
            <html>
            <head>
                <title>Skills</title>
            </head>
            <body>
                <h1>My Skills</h1>

                <nav>
                    <a href="/">Home</a> |
                    <a href="/about">About Me</a> |
                    <a href="/skills">Skills</a> |
                    <a href="/projects">Projects</a> |
                    <a href="/contact">Contact</a>
                </nav>

                <hr>

                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>React.js</li>
                </ul>
            </body>
            </html>
        `;

    } else if (req.url === "/projects") {

        page = `
            <html>
            <head>
                <title>Projects</title>
            </head>
            <body>
                <h1>My Projects</h1>

                <nav>
                    <a href="/">Home</a> |
                    <a href="/about">About Me</a> |
                    <a href="/skills">Skills</a> |
                    <a href="/projects">Projects</a> |
                    <a href="/contact">Contact</a>
                </nav>

                <hr>

                <h3>Project 1: Student Management System</h3>
                <p>A simple application for managing student information.</p>

                <h3>Project 2: Portfolio Website</h3>
                <p>A personal portfolio website created using web technologies.</p>
            </body>
            </html>
        `;

    } else if (req.url === "/contact") {

        page = `
            <html>
            <head>
                <title>Contact</title>
            </head>
            <body>
                <h1>Contact Details</h1>

                <nav>
                    <a href="/">Home</a> |
                    <a href="/about">About Me</a> |
                    <a href="/skills">Skills</a> |
                    <a href="/projects">Projects</a> |
                    <a href="/contact">Contact</a>
                </nav>

                <hr>

                <p><strong>Email:</strong> Tanvishp@email.com</p>
                <p><strong>Phone:</strong> +91 9876543210</p>
                <p><strong>City:</strong> Mumbai</p>
            </body>
            </html>
        `;

    } else {

        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("404 - Page Not Found");
        return;
    }

    res.end(page);
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
