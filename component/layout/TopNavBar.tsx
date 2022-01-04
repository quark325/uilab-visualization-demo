import classes from './TopNavBar.module.css';
import TopNavElement from './TopNavElement';
import GithubIcon from 'public/github.svg';
import PaperIcon from 'public/paper.svg';

type TTopNavBar = {
  paperUrl?: string;
  githubUrl?: string;
};

const TopNavBar = ({ paperUrl, githubUrl }: TTopNavBar) => {
  return (
    <header className={classes.header}>
      <div className={classes.padding}>
        <div className={classes.paddingText}>
          <span className={classes.paddingTextBold}>{'KAIST'}</span>
          {'Users & Information Lab'}
        </div>
      </div>
      <div className={classes.content}>
        <a href="https://uilab.kr/" className={classes.logo}>
          <div className={classes.logoImage}></div>
          <div className={classes.logoText}>
            USERS {'&'} <br />
            INFORMATION
          </div>
        </a>
        <ul>
          {paperUrl && (
            <TopNavElement name="Paper" link={paperUrl}>
              <PaperIcon />
            </TopNavElement>
          )}
          {githubUrl && (
            <TopNavElement name="Code" link={githubUrl}>
              <GithubIcon />
            </TopNavElement>
          )}
        </ul>
      </div>
    </header>
  );
};

export default TopNavBar;
