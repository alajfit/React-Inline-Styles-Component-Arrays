# React-Inline-Styles-Component-Arrays
React-Inline-Styles-Component-Arrays

* NB: Inline styles can not be added to a JSX file as normal
    * inline styles must be injected as an object

* To create multiple elements use arrays
    ```
    const Servicelist = [
        "Marketing",
        "Web Dev",
        "Strategy"
    ].map((title, i) => <Service key={i} title={title}/>);
    ```
