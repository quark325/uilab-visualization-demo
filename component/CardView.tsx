import CardFlip from './CardFlip';
import classes from './CardView.module.css';

const focusOn = (content: string, startIndex: number, endIndex: number) => {
  return (
    <>
      <span className={classes.notFocusOn}>{content.slice(0, startIndex)}</span>
      <span className={classes.focusOn}>
        {content.slice(startIndex, endIndex)}
      </span>
      <span className={classes.notFocusOn}>{content.slice(endIndex)}</span>
      {content.length === endIndex - startIndex && (
        <span className={classes.focusOnTail}>{` (all sentence)`}</span>
      )}
    </>
  );
};

type TCardFrontFormatter = {
  title?: React.ReactNode;
  comment: React.ReactNode;
};

const CardFrontFormatter = ({ title, comment }: TCardFrontFormatter) => (
  <div className={classes.card}>
    <span>
      <span className={classes.green}>Title: </span>
      <br />
      {title}
    </span>
    <br />
    <span>
      <span className={classes.blue}>Comment: </span>
      <br />
      {comment}
    </span>
    <br />
    <span>
      <span className={classes.red}>Question: </span>
      <br />
      Is this comment <span className={classes.italic}>offensive?</span> <br />
      If so, <span className={classes.italic}> who is the target? </span>
      <br />
    </span>
  </div>
);

type TCardBackFormatter = {
  isOffensive?: boolean;
  offensiveSpan?: React.ReactNode;
  target?: string;
  targetGroup?: string;
  taggedComment?: React.ReactNode;
};

const CardBackFormatter = ({
  offensiveSpan,
  target,
  targetGroup,
  taggedComment,
}: TCardBackFormatter) => {
  const isOffensive = offensiveSpan ? true : false;
  return (
    <div className={classes.card}>
      <span>
        <span>Classification: </span>
        <br />
        <span className={isOffensive ? classes.red : classes.green}>
          {isOffensive ? 'Offensive ' : 'Not offensive '} comment
          <br />
        </span>
        <br />
      </span>
      {target && (
        <>
          <span>
            <span>Target: </span>
            <br />
            <span className={classes.blue}>
              {target}
              <br />
              {targetGroup}
            </span>
          </span>
          <br />
        </>
      )}
      {offensiveSpan && (
        <>
          <span>
            <span>Offensive span: </span>
            <br />
            {offensiveSpan}
          </span>
        </>
      )}

      {/* {targetGroup && (
        <>
          <br />
          <span>
            <b>Target Group: </b>
            <br />
            
          </span>
        </>
      )} */}
      {/* <span>{taggedComment}</span> */}
    </div>
  );
};

interface CardContent {
  front: React.ReactNode;
  back: React.ReactNode;
}

const cardData: CardContent[] = [
  {
    front: (
      <CardFrontFormatter
        title="????????? ?????????! ?????? ????????? ???????????? ?????????!"
        comment="dvi to hdmi ????????? ???????????? ?????? ??? ?????????? ???????????? ?????? ????????????."
      />
    ),
    back: <CardBackFormatter taggedComment={`Tagged not offensive comment`} />,
  },
  {
    front: (
      <CardFrontFormatter
        title="???????????? ?????? ?????? ?????? ?????????????????????, ????????? ??????? MBC??????NEWS"
        comment="?????? ??? ????????? ????????? ??? ????????? ???"
      />
    ),
    back: (
      <CardBackFormatter
        offensiveSpan={focusOn('?????? ??? ????????? ????????? ??? ????????? ???', 0, 20)}
        target="Not specified"
      />
    ),
  },
  {
    front: (
      <CardFrontFormatter
        title="????????? ????????? ????????? ?????? - ????????? ??????????????? ???????????? ?????? ???????"
        comment="???????????? ?????? ????????? ?????????, ????????? ????????? ????????????...?"
      />
    ),
    back: (
      <CardBackFormatter
        offensiveSpan={focusOn(
          '???????????? ?????? ????????? ?????????, ????????? ????????? ????????????...?',
          20,
          33
        )}
        target="[Group] Religion - Christian"
        targetGroup=""
      />
    ),
  },
  {
    front: (
      <CardFrontFormatter
        title="?????????vs?????????, ??????????????? ????????????????????? ?????? ?????? ??????????????? "
        comment="??????????????? ??????????????? ????????? ?????? ???????????? ???????????? ????????? ??? ???????????????"
      />
    ),
    back: (
      <CardBackFormatter
        offensiveSpan={focusOn(
          '??????????????? ??????????????? ????????? ?????? ???????????? ???????????? ????????? ??? ???????????????',
          6,
          40
        )}
        target="[Group] Others - Age"
        targetGroup=""
      />
    ),
  },
];

const CardView = () => (
  <div className={classes.cardView}>
    {cardData.map((cardContent, index) => {
      const { front, back } = cardContent;
      return <CardFlip key={index} Front={front} Back={back} />;
    })}
  </div>
);

export default CardView;
