interface Navlinks {
    label: string;
    href: string;
}
export const BASE_URL = "/"

export const navLinks: Navlinks[] = [
    {
        label: "Build a Counter component using useState",
        href: "counter"
    },
    {
        label: "To-Do list",
        href: 'to-do-list'
    }
    , {
        label: "search filter",
        href: 'search-filter'
    }, {
        label: "Login form with validation",
        href: 'login-from'
    }
]