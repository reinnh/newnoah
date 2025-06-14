import { FaTwitter, FaInstagram } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import { BsGlobe, BsApple, BsGooglePlay } from "react-icons/bs";

export default function Footer() {
    return (
        <footer className="flex flex-col  w-full justify-center items-center">
            <div className="mt-2 px-6 py-12 container  text-sm">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                   

                    <div>
                        <h4 className="font-bold mb-2">Products</h4>
                        <ul className="space-y-1">
                            <li>Wallet</li>
                            <li>Exchange</li>
                            <li>Watch-Only Wallet(Explorer)</li>
                            <li>Learn</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-2">Resources</h4>
                        <ul className="space-y-1">
                            <li>Open Source</li>
                            <li>Research</li>
                            <li>Legal & Privacy</li>
                            <li>Support</li>
                            <li>Blog</li>
                            <li>Security</li>
                        </ul>
                    </div>

                </div>

                <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-4">
                        <BsGlobe /> English (US)
                        <span>&copy; noah-solutions.com</span>
                        <a href="#" className="text-blue-600">NMLS Consumer Access</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}