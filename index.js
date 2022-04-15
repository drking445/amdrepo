function topTwoRanked(productRankings){
    let topTwo = {};
    let topRanked = Number.MAX_SAFE_INTEGER;
    let secondTopRanked = Number.MAX_SAFE_INTEGER;
    let topRankedName = "";
    let secondTopRankedName = "";

    for(let i = 0; i < productRankings.length; i++){
        let currentRank = productRankings[i].rank;
        let currentName = productRankings[i].name;
        
        if(currentRank < topRanked){
            secondTopRanked = topRanked;
            secondTopRankedName = topRankedName;
            topRanked = currentRank;
            topRankedName = currentName;
        }
        else if(currentRank < secondTopRanked){
            secondTopRanked = currentRank;
            secondTopRankedName = currentName;
        }
    }
    
    topTwo.top2 = [topRankedName, secondTopRankedName];

    return topTwo;
}

function transform(data){
    let longestRow = 0;

    for(let i = 0; i < data.length; i++){
        if(data[i].length > longestRow){
            longestRow = data[i].length;
        }
    }

    for(let i = 0; i < longestRow; i++){
        let array = [];
        for(let j = 0; j < data.length; j++){
            if(i >= data[j].length){
                console.log("undefined");
                array.push(undefined);
            }
            else{
                array.push(data[j][i]);
                console.log(data[j][i]);
            }
        }
    }
}

const d1 = [1, 2, 3];
const d2 = [4, 5, 6];
const d3 = [7, 8, 9, 11, 12, 13, 15];
const data=[d1,d2,d3];
transform(data);

console.log(topTwoRanked([{"name":"AMD_Product-A","rank":4},
{"name":"AMD_Product-B","rank":3},
{"name":"AMD_Product-C","rank":21},
{"name":"AMD_Product-X","rank":1}]));