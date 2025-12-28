import GitHubIcon from '../assets/icons/github';
import SocialIcon from '../components/socialIcon.component';
import LinkedInIcon from '../assets/icons/linkedin';
import InstagramIcon from '../assets/icons/instagram';

export default function SocialButtons({ className }: { className?: string }) {
    return (
        <div className={`${className} flex gap-5`}>
            <SocialIcon href="https://github.com/vincevd1" className="rounded-full">
                <GitHubIcon />
            </SocialIcon>
            <SocialIcon
                href="https://www.linkedin.com/in/vince-van-diermen-756aa82b3/"
                className="rounded-xs"
            >
                <LinkedInIcon />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/vincevd1/" className="rounded-lg">
                <InstagramIcon />
            </SocialIcon>
        </div>
    );
}
