/*
    JavaScript Cookie:

    -> Cookies are data, stored in small text files, on your computer.
    -> When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user.
    -> Cookies were invented to solve the problem "how to remember information about the user":
        - When a user visits a web page, his/her name can be stored in a cookie.
        - Next time the user visits the page, the cookie "remembers" his/her name.
    -> Use cases of cookies are: login and logout (remember me), shopping carts, tracking user behavior etc.

*/

/*
    Creating a Cookie Syntax: (Creating a cookie is also called setting a cookie)
    document.cookie = "cookieName=cookieValue; expires=expirationDate; path=pathValue; domain=domainValue; secure";

    Following parameters are accepted:
    -> cookieName: The name of the cookie.
    -> cookieValue: The value to be stored in the cookie.
    -> expires: (Optional) The expiration date of the cookie in GMT or UTC format. If not set, the cookie will be a session cookie and will expire when the user closes the browser.
    -> path: (Optional) Specifies the URL path for which the cookie is valid. If not set, it defaults to the current page's path.
    -> domain: (Optional) Specifies the domain for which the cookie is valid. If not set, it defaults to the current domain.
    -> secure: (Optional) If set to true, the cookie will only be sent over secure (HTTPS) connections.

    Reading a Cookie Syntax: (Reading a cookie is also called getting a cookie)
    document.cookie

    -> simply print the document.cookie in your browser console or browser window

    Deleting a Cookie Syntax:
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    Imp. for deleting a cookie:
    -> Deleting a cookie is very simple. You don't have to specify a cookie value when you delete a cookie.
    -> You should define the cookie path to ensure that you delete the right cookie.
    -> Some browsers will not let you delete a cookie if you don't specify the path.
*/

//Simple Example for creating a cookie
// document.cookie = "name=dimaria; expires=Fri, 4 Aug 2023 12:00:00 UTC; path=/";

//reading a cookie in console
// console.log(document.cookie);

//deleting a cookie
// document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

/* Example for multiple cookies */

document.cookie = "username=angel;expires=Thu, 17 Aug 2023 12:00:00 UTC;path=/";

document.cookie = "password=dimaria;expires=Thu, 17 Aug 2023 12:00:00 UTC;path=/";

console.log(document.cookie);

//converting cookie into array and reading it
var arr = document.cookie.split('; ');
console.log(arr);

//reading multiple cookie at a time (which are stored in array)
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//deleting cookie using function
/* function deleteCookie(cookieName) {
    document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}

deleteCookie('username');
deleteCookie('password'); */
