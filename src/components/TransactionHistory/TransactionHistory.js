import { TransactionItem } from "./TransactionItem"
export const TransactionHistory = ({ items }) => {
    return (
       <table className="transaction-history">
           <thead>
              <tr>
                 <th>Type</th>
                 <th>Amount</th>
                 <th>Currency</th>
               </tr>
            </thead>
               <tbody>
                {items.map(transaction => (
                     <TransactionItem key={transaction.id} transaction={transaction} />
                 ))}
               </tbody>
        </table>        
    
    )
}