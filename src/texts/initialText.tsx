const INITIAL_TEXT: string = `
# Welcome to the Minimalist Markdown Previewer!
 
### A Simple and User-Friendly     Markdown Previewer  

Explore our minimalist markdown previewer, designed for ease of use. It features convenient copy buttons in both panels, allowing you to copy both plain text and HTML code effortlessly.

---

# Let's Dive into Markdown Syntax

---

# Heading level 1(H1)
## Heading level 2 (H2)
### Heading level 3 (H3)
#### Heading level 4 (H4)
##### Heading level 5 (H5)
###### Heading level 6 (H6)

---

## Lists

You can use - to make \`unordered lists\` items:
- This is a list
- With two items

Or you can use \`ordered lists\` using numbers
1. First Item
2. Second Item
3. Third Item

---

## Links

The link syntax is \`[description](url)\`. Here's an example:
[GitHub](https://www.github.com)

---

## Text Formatting

You can format text using various styles:

- **Bold**: Wrap the text in double asterisks (\`**\`) or double underscores (\`__\`).
**This text is bold.**

- *Italic*: Wrap the text in single asterisks (\`*\`) or single underscores (\`_\`).
*This text is italicized.*

- Strikethrough: Wrap the text in double tildes (\`~~\`).
 ~~This text is strikethroughed.~~

- **Bold and *Italic***: Combine styles for emphasis.
 **This text is bold and *italicized***.

---

## Blockquotes

You can create blockquotes using the greater-than symbol (\`>\`).
> This is a blockquote. 

## Images

To display images, use the syntax \`![Alt text](url)\`. Here's an example:
![Markdown Logo](https://markdown-here.com/img/icon256.png)

---

## Programming Code

It also supports the creation of programming code. To create programming code, use the backtick (\`) symbol to wrap the code. You can use the syntax of the programming language you want to write the code in.

**Example**

\`\`\`python
class Animal:
    def __init__(self, name, sound):
        self.name = name
        self.sound = sound

    def make_sound(self):
        print(f"{self.name} says {self.sound}!")

# Creating instances of the Animal class
cat = Animal("Cat", "Meow")
dog = Animal("Dog", "Woof")

# Making sounds
cat.make_sound()
dog.make_sound()
\`\`\`

---

## Tables

| Column 1 | Column 2 |
|----------|----------|
| Value 1  | Value 2  |
| Value 3  | Value 4  |

---

## Mathematical Equations

It also supports the creation of mathematical equations. To create a mathematical equation, use the dollar symbol (\`\`$\`) to enclose the equation. You can use LaTeX syntax to write the equation.

**Example**

$$e^{i \pi} + 1 = 0$$

## Horizontal Rule

You can create a horizontal rule using three hyphens (---) or three asterisks (***).

---

## Get Started!

Start using our minimalist Markdown previewer to see your Markdown content come to life. Feel free to experiment with different syntax and enjoy a hassle-free previewing experience!
`

export default INITIAL_TEXT
