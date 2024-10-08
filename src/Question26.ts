
"26. Given a variable named my_string, try reversing the string using  my_string.split().reverse().join() and then print the reversed string to the console. If the try clause has an error, print the error message to the console. Finally, print the typeof of the my_string variable to the console."


let my_string: string;

my_string = 'hello'

try {
    console.log(my_string.split("").reverse().join(""))
} catch (error: any) {
    console.error(error.message)
} finally {
    console.log(typeof my_string)
}