import java.util.*;

public class Solution{
    public static void main(String args[]) {
        int[][] points = {{0,0},{2,2},{3,10},{5,2},{7,0}};

        System.out.println(minCostConnectPoints2(points));
        System.out.println(minCostConnectPoints(points));
    }

    public static int minCostConnectPoints2(int[][] points) {
        Queue <int []> minHeap = new PriorityQueue<>((a,b)-> a[1]-b[1]);
        boolean [] visited = new boolean[points.length];
        int minCost = 0;

        minHeap.offer(new int [] {0,0});

        while(!minHeap.isEmpty()){
            int current [] = minHeap.poll();
            int vertex = current[0];
            int weight = current[1];

            if(visited[vertex]){
                continue;
            }

            visited[vertex]= true;
            minCost += weight;

            for(int i=0; i<points.length;i++){
                if(!visited[i]){
                    int cost =  Math.abs(points[i][0]- points[vertex][0]) + 
                                Math.abs(points[i][1]- points[vertex][1]);
                    minHeap.offer(new int [] {i, cost});
                }
            }

        }
        return minCost;
    }

    public static int minCostConnectPoints(int[][] points) {
        int length = points.length;
        Set<Integer> visited = new HashSet<>();
        int[] minCost = new int[length];
        for(int i =1; i < length; i++){
            minCost[i] = Integer.MAX_VALUE;
        }
        Queue<Integer> queue = new LinkedList<>();
        queue.offer(0);
        int solution = 0;
        while(!queue.isEmpty()){
            int cur = queue.poll();
            visited.add(cur);
            int minD = Integer.MAX_VALUE;
            int nextIndex = cur;
            solution += minCost[cur];
            for(int i = 0; i < length;i++){
                if(visited.contains(i)){
                    continue;
                }
                int cur_cost = Math.abs(points[i][0]- points[cur][0]) + Math.abs(points[i][1]-points[cur][1]);
                minCost[i] = Math.min(minCost[i], cur_cost);
                if(minCost[i]< minD){
                    minD = minCost[i];
                    nextIndex = i;
                }
            }
            if(nextIndex == cur){
                return solution;
            }
            queue.offer(nextIndex);
        }
        return solution;
    }
}