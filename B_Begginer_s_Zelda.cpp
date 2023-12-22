#include<bits/stdc++.h>
using namespace std;
vector<int>cnt;
void dfs(int src,int par, vector<vector<int>>&adj){
    int childs = 0;
    for(auto node: adj[src]){
        if(node != par){
            dfs(node, src, adj);
            cnt[src]+= cnt[node];
        }
        childs++;
    }
    cnt[src]+=childs/2;
}
int main(){
    int n;
    cin >> n;
    while(n--){
        int m;
        cin >> m;
        cnt.clear();
        cnt.resize(m);
        vector<vector<int>>adj(m);
        for(int i = 0; i < m - 1; i++){
            int a, b;
            cin >> a >> b;
            adj[a - 1].push_back(b - 1);
            adj[b - 1].push_back(a - 1);
        }
        dfs(0, -1, adj);
        cout << cnt[0] << endl;
    }
}