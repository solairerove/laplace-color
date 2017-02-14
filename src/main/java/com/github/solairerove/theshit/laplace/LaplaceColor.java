package com.github.solairerove.theshit.laplace;

import edu.princeton.cs.introcs.Picture;

import java.awt.Color;

public class LaplaceColor {
    public static void main(String[] args) {
        int N = 640;
        Picture pic = new Picture(N + 1, N + 1);
        double[][] V = new double[N + 1][N + 1];

        // precompute colors
        Color[] colors = new Color[101];
        for (int i = 0; i <= 100; i++) {
            int red = (255 * i) / 100;
            int green = 0;
            int blue = 255 - red;
            colors[i] = new Color(red, green, blue);
        }
        for (int i = 0; i <= 100; i = i + 10)
            colors[i] = Color.WHITE;


        // initialize all points with reasonable starting values for the potential
        for (int i = 1; i < N; i++)
            for (int j = 1; j < N; j++)
                V[i][j] = 51.0;

        // boundary conditions
        for (int j = 0; j <= N; j++) V[0][j] = 30;   // left
        for (int j = 0; j <= N; j++) V[N][j] = 70;   // right
        for (int i = 0; i <= N; i++) V[i][0] = 0;   // bottom
        for (int i = 0; i <= N; i++) V[i][N] = 100;   // top


        // numerically solve Laplace's equation
        while (true) {

            // draw
            for (int i = 1; i < N; i++) {
                for (int j = 1; j < N; j++) {
                    int c = (int) Math.round(V[i][j]);
                    pic.set(i, N - 1 - j, colors[c]);
                }
            }
            pic.show();

            // repeat 100 times before drawing to screen
            for (int r = 0; r < 500; r++)
                for (int i = 1; i < N; i++)
                    for (int j = 1; j < N; j++)
                        V[i][j] = 0.25 * (V[i - 1][j] + V[i + 1][j] + V[i][j - 1] + V[i][j + 1]);
        }
    }
}
