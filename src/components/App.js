import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';
import { GlobalStyle } from './GlobalStyle';


export const App = () => {
    return (
        <main>
            <section>    
                <Profile user={user} />
            </section>
            
            <section>   
                <Statistics title="Upload stats" stats={data} />
            </section>

            <section> 
                <FriendList friends={friends} />
            </section>

            <section>
                <TransactionHistory items={transactions} />
            </section>

            <GlobalStyle />
        </main>          
    );
};
