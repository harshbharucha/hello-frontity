import Link from "@frontity/components/link"
import { styled } from "frontity"

const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    margin-top: 1em;
    & > a {
        margin-right: 1em;
        color: steelblue;
        text-decoration: none;
    }
`

const Nav = () => {
    return (
        <>
            <StyledNav>
                <Link link="/">Home</Link>
                <Link link="/destinations">Destinations</Link>
                <Link link="/about-us">About Us</Link>
            </StyledNav>
        </>
    )
}

export default Nav