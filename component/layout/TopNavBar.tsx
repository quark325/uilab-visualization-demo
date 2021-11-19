import classes from './TopNavBar.module.css';
import TopNavElement from './TopNavElement';
import GithubIcon from 'public/github.svg';
import PaperIcon from 'public/paper.svg';

const TopNavBar = () => {
  return (
    <header className={classes.header}>
      <div className={classes.content}>
        <div className={classes.logo}>
          <div className={classes.logoImage}></div>
          <div className={classes.logoText}>
            USERS {'&'} <br />
            INFORMATION
          </div>
        </div>
        <ul>
          <TopNavElement name="github" link="https://github.com/jaimeenahn">
            <GithubIcon />
          </TopNavElement>
          <TopNavElement name="paper" link="https://arxiv.org/abs/2109.05704">
            <PaperIcon />
          </TopNavElement>
        </ul>
      </div>
    </header>
  );
};

export default TopNavBar;