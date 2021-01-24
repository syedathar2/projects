import java.awt.*;
import javax.swing.*;
import java.awt.event.*;



public class Calculator implements ActionListener {
	JFrame calcFrame;
	JTextField calcTextField;
	JButton [] calcNumButtons = new JButton[10];
	// array to hold our JButtons to hold function buttons
	JButton[] calcFunctionButtons = new JButton[9];
	JButton add, sub, mul, div, neg;
	JButton decimal, equal, delete, clear;
	
	// JPanel to hold separate buttons
	JPanel calcPanel; 
	Font calcFont = new Font("Calculator", Font.PLAIN, 30);
	
	double num1 = 0; 
	double num2; 
	double result = 0;
	char calcOperator;
	Calculator () {
		
		// setting up the frame
		calcFrame = new JFrame("Calculator in Java");
		calcFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		calcFrame.setSize(420, 550);
		calcFrame.setLayout(null);
		
		// setting up textfield
		calcTextField = new JTextField();
		calcTextField.setBounds(50, 25, 300, 50);
		calcTextField.setFont(calcFont);
		calcTextField.setEditable(false);
		
		add = new JButton("+");
		sub = new JButton("-");
		mul = new JButton("*");
		div = new JButton("/");
		decimal = new JButton(".");
		equal = new JButton("=");
		delete = new JButton("Del");
		clear = new JButton("Clear");
		neg = new JButton("(-)");
		
		calcFunctionButtons[0] = add;
		calcFunctionButtons[1] = sub;
		calcFunctionButtons[2] = mul;
		calcFunctionButtons[3] = div;
		calcFunctionButtons[4] = decimal;
		calcFunctionButtons[5] = equal;
		calcFunctionButtons[6] = delete;
		calcFunctionButtons[7] = clear;
		calcFunctionButtons[8] = neg;
		
		for (int k = 0; k < 9; k++) {
			calcFunctionButtons[k].addActionListener(this);
			calcFunctionButtons[k].setFont(calcFont);
			calcFunctionButtons[k].setFocusable(false);
		}
		
		for (int j = 0; j < 10; j++) {
			calcNumButtons[j] = new JButton(String.valueOf(j));
			calcNumButtons[j].addActionListener(this);
			calcNumButtons[j].setFont(calcFont);
			calcNumButtons[j].setFocusable(false);
		}
		
		delete.setBounds(150, 430, 100, 50);
		clear.setBounds(250, 430, 100, 50);
		neg.setBounds(50, 430, 145, 50);
		
		calcPanel = new JPanel();
		calcPanel.setBounds(50, 100, 300, 300);
		calcPanel.setLayout(new GridLayout (4, 4, 10, 10));
		calcPanel.add(calcNumButtons[1]);
		calcPanel.add(calcNumButtons[2]);
		calcPanel.add(calcNumButtons[3]);
		calcPanel.add(add);
		
		calcPanel.add(calcNumButtons[4]);
		calcPanel.add(calcNumButtons[5]);
		calcPanel.add(calcNumButtons[6]);
		calcPanel.add(sub);
		
		calcPanel.add(calcNumButtons[7]);
		calcPanel.add(calcNumButtons[8]);
		calcPanel.add(calcNumButtons[9]);
		calcPanel.add(mul);
		calcPanel.add(decimal);
		calcPanel.add(calcNumButtons[0]);
		calcPanel.add(equal);
		calcPanel.add(div);


		
		calcFrame.add(calcPanel);
		calcFrame.add(delete);
		calcFrame.add(clear);
		calcFrame.add(neg);
		calcFrame.add(calcTextField);
		calcFrame.setVisible(true);
		
		
		
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Calculator calculator = new Calculator();
	}

	@Override
	public void actionPerformed(ActionEvent e) {
		// TODO Auto-generated method stub
		for (int i = 0; i < 10; i++) {
			if (e.getSource() == calcNumButtons[i]) {
				calcTextField.setText(calcTextField.getText().concat(String.valueOf(i)));
			}
		}
		if (e.getSource() == decimal) {
			calcTextField.setText(calcTextField.getText().concat("."));
		}
		
		if (e.getSource() == add) {
			num1 = Double.parseDouble(calcTextField.getText());
			calcOperator = '+';
			calcTextField.setText("");
		}
		
		if (e.getSource() == sub) {
			num1 = Double.parseDouble(calcTextField.getText());
			calcOperator = '-';
			calcTextField.setText("");
		}
		
		if (e.getSource() == mul) {
			num1 = Double.parseDouble(calcTextField.getText());
			calcOperator = '*';
			calcTextField.setText("");
		}
		
		if (e.getSource() == div) {
			num1 = Double.parseDouble(calcTextField.getText());
			calcOperator = '/';
			calcTextField.setText("");
		}
		
		if (e.getSource() == equal) {
			num2 = Double.parseDouble(calcTextField.getText());
			switch (calcOperator) {
			case '+':
				result = num1 + num2;
				break;
			case '-':
				result = num1 - num2;
				break;
			case '*':
				result = num1 * num2;
				break;
			case '/':
				result = num1 / num2;
				break;
			}
			calcTextField.setText(String.valueOf(result));
			result = 0;
		}
		
		if (e.getSource() == clear) {
			calcTextField.setText("");
		}
		if (e.getSource() == delete) {
			String del = calcTextField.getText();
			calcTextField.setText("");
			for(int p = 0; p < del.length()-1; p++) {
				calcTextField.setText(calcTextField.getText() + del.charAt(p));
			}
		}
		
		if (e.getSource() == neg) {
			double tmp = Double.parseDouble(calcTextField.getText());
			tmp = tmp * (-1);
			calcTextField.setText(String.valueOf(tmp));
		}
	}
}
