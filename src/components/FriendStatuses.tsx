import StatusItem from "./StatusItem";

function FriendStatuses(): JSX.Element {
  return (
    <section>
      <h2>friend's status</h2>
      <a href="#">add more friends</a>
      <ol>
        <StatusItem
          username={"jack"}
          content={"wondering when Mer is going to show up"}
          timeAgo={{ n: 5, unit: "minutes" }}
        />
        <StatusItem
          username={"Dom"}
          content={"who's johnny, he says"}
          emoji={"⭐"}
          timeAgo={{ n: 15, unit: "minutes" }}
        />
        <StatusItem
          username={"ev"}
          content={"so excited about new odeo ideas"}
          emoji={"⭐"}
          timeAgo={{ n: 19, unit: "minutes" }}
        />
        <StatusItem
          username={"Tony Stubblebine"}
          content={"thinking about polyphasic sleep"}
          emoji={"◻️"}
          timeAgo={{ n: 19, unit: "minutes" }}
        />
        <StatusItem
          username={"drx"}
          content={"chatting in gmail w/Jack"}
          emoji={"⭐"}
          timeAgo={{ n: 33, unit: "minutes" }}
        />
        <StatusItem
          username={"biz"}
          content={"having some coffee"}
          emoji={"⭐"}
          timeAgo={{ n: 36, unit: "minutes" }}
        />
        <StatusItem
          username={"Florian"}
          content={"Preparing a pizza"}
          emoji={"⭐"}
          timeAgo={{ n: 3, unit: "hours" }}
        />
        <StatusItem
          username={"Courtney"}
          content={"tmulti-tasking audio debug audio coding"}
          emoji={"⭐"}
          timeAgo={{ n: 8, unit: "hours" }}
        />
        <StatusItem
          username={"Jack"}
          content={"antasizing about jack drawing naked people mmmmmmmmmmmmm..... naked people."}
          emoji={"◻️"}
          timeAgo={{ n: 21, unit: "hours" }}
        />
        <li>
          ⭐ <a href="#">noah</a>: Oh crap, I think I might be getting that f'in
          cold' <small>about 21 hours ago</small>
        </li>
        <li>
          ⭐ <a href="#">asruge</a>: put some rss on my mp3
          <small>about 22 hours ago</small>
        </li>
        <li>
          ⭐ <a href="#">crystal</a>: in the musicals <small>1 day ago</small>
        </li>
        <li>
          ◻️ <a href="#">Tim Roberts</a>: setting up my mac mini
          <small>1 day ago</small>
        </li>
        <li>
          ◻️ <a href="#">4153738157</a>: just setting up my twttr
          <small>1 day ago</small>
        </li>
      </ol>
    </section>
  );
}

export default FriendStatuses;
