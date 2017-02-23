package com.github.solairerove.theshit.gauss;

import edu.princeton.cs.introcs.StdOut;

public class GaussianElimination {
    private static final double EPSILON = 1e-10;

    // sample client
    public void main() {
        int N = 3;
        double[][] A = {
                {0, 1, 1},
                {2, 4, -2},
                {0, 3, 15}
        };
        double[] b = {4, 2, 36};
        double[] x = eliminate(A, b);


        // print results
        for (int i = 0; i < N; i++) {
            StdOut.println(x[i]);
        }
    }

    // Gaussian elimination with partial pivoting
    private double[] eliminate(double[][] A, double[] b) {
        int N = b.length;

        for (int p = 0; p < N; p++) {

            // find pivot row and swap
            // Search for maximum and swap
            int max = p;
            for (int i = p + 1; i < N; i++) {
                if (Math.abs(A[i][p]) > Math.abs(A[max][p])) {
                    max = i;
                }
            }
            double[] temp = A[p];
            A[p] = A[max];
            A[max] = temp;
            double t = b[p];
            b[p] = b[max];
            b[max] = t;

            // singular or nearly singular
            if (Math.abs(A[p][p]) <= EPSILON) {
                throw new RuntimeException("Matrix is singular or nearly singular");
            }

            /**
            * It first exchanges rows to move the entry with the 
            * largest absolute value to the pivot position
            * Do for all rows below pivot
            * Matrix will be in row-echelon form and may be solved by back-substitution
            **/
            for (int i = p + 1; i < N; i++) {
                double alpha = A[i][p] / A[p][p];
                b[i] -= alpha * b[p];
                // Do for all remaining elements in current row
                for (int j = p; j < N; j++) {
                    A[i][j] -= alpha * A[p][j];
                }
            }
        }

        // back substitution
        double[] x = new double[N];
        for (int i = N - 1; i >= 0; i--) {
            double sum = 0.0;
            for (int j = i + 1; j < N; j++) {
                sum += A[i][j] * x[j];
            }
            x[i] = (b[i] - sum) / A[i][i];
        }
        return x;
    }
}
